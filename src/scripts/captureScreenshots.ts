import { chromium } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Resolve paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DESKTOP_PATH = '/Users/evanward/Desktop/AS2-Portal-Screenshots';
const BASE_URL = 'http://localhost:3000';

// We'll read the LESSONS array indirectly to avoid complex build issues in a simple script
// or just parse the data files if needed. For now, let's define the targets.
const MODULES = ['M1', 'M2', 'M3', 'S1', 'S2', 'S3', 'S4'];

async function capture() {
  console.log('🚀 Starting Screenshot Capture Engine...');

  if (!fs.existsSync(DESKTOP_PATH)) {
    fs.mkdirSync(DESKTOP_PATH, { recursive: true });
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport to a standard desktop size
  await page.setViewportSize({ width: 1440, height: 1080 });

  for (const module of MODULES) {
    console.log(`\n📦 Processing Module: ${module}`);
    const moduleFolder = path.join(DESKTOP_PATH, module);
    if (!fs.existsSync(moduleFolder)) fs.mkdirSync(moduleFolder);

    // 1. Capture Lesson Page
    const lessonId = `${module}-Lesson`;
    const lessonUrl = `${BASE_URL}/lessons/${lessonId}`;
    console.log(`   📸 Capturing Lesson: ${lessonId}`);
    
    try {
      await page.goto(lessonUrl, { waitUntil: 'networkidle' });
      
      // FIX: Force the layout to expand to full height for the screenshot
      await page.evaluate(() => {
        // Remove fixed height and overflow-hidden from root elements
        const root = document.querySelector('#root > div');
        const container = root?.parentElement?.parentElement; // html/body
        
        if (root instanceof HTMLElement) {
          root.style.height = 'auto';
          root.style.overflow = 'visible';
        }
        
        // Find the main scrollable area
        const main = document.querySelector('main');
        if (main instanceof HTMLElement) {
          main.style.height = 'auto';
          main.style.overflow = 'visible';
          main.style.flex = 'none';
        }

        // Hide the sidebar during screenshots to focus on content
        const aside = document.querySelector('aside');
        if (aside instanceof HTMLElement) {
          aside.style.display = 'none';
        }
      });

      // Scroll to bottom to trigger any lazy loading or layout calculations
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 100;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;
            if (totalHeight >= scrollHeight) {
              clearInterval(timer);
              resolve(null);
            }
          }, 100);
        });
      });

      // Give Mermaid/KaTeX a moment to settle
      await page.waitForTimeout(2000); 
      
      await page.screenshot({ 
        path: path.join(moduleFolder, `${module}_Lesson_Full.png`), 
        fullPage: true 
      });
    } catch (e) {
      console.error(`   ❌ Failed to capture lesson ${lessonId}:`, e);
    }

    // 2. Capture Practice Page
    const practiceUrl = `${BASE_URL}/practice/${module}/General`;
    console.log(`   📸 Capturing Practice: ${module}`);
    
    try {
      await page.goto(practiceUrl, { waitUntil: 'networkidle' });

      // FIX: Force layout expansion for practice page
      await page.evaluate(() => {
        const root = document.querySelector('#root > div');
        if (root instanceof HTMLElement) {
          root.style.height = 'auto';
          root.style.overflow = 'visible';
        }
        const main = document.querySelector('main');
        if (main instanceof HTMLElement) {
          main.style.height = 'auto';
          main.style.overflow = 'visible';
          main.style.flex = 'none';
        }
        const aside = document.querySelector('aside');
        if (aside instanceof HTMLElement) {
          aside.style.display = 'none';
        }

        // Open all <details> elements to show solutions
        const details = document.querySelectorAll('details');
        details.forEach(d => d.open = true);
      });

      await page.waitForTimeout(2000); // Wait for open animations and rendering
      
      await page.screenshot({ 
        path: path.join(moduleFolder, `${module}_Practice_Solutions_Full.png`), 
        fullPage: true 
      });
    } catch (e) {
      console.error(`   ❌ Failed to capture practice ${module}:`, e);
    }
  }

  await browser.close();
  console.log(`\n✅ Done! Screenshots saved to: ${DESKTOP_PATH}`);
}

capture();
