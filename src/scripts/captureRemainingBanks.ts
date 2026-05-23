import { chromium } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

const OUTPUT_DIR = '/Users/evanward/Desktop/Question-Bank-Captures';
const BASE_URL = 'http://localhost:3000';
const MODULES = ['M3', 'S1', 'S2', 'S3', 'S4'];

async function captureRemaining() {
  console.log('🚀 Starting bulk capture for M3 - S4 question banks...');

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 1080 });

  for (const mod of MODULES) {
    const url = `${BASE_URL}/practice/${mod}/General`;
    const outputPath = path.join(OUTPUT_DIR, `${mod}_Question_Bank_Expanded.png`);
    
    console.log(`\n📦 Processing Module: ${mod}`);
    
    try {
      await page.goto(url, { waitUntil: 'networkidle' });
      
      // Expand all solutions and remove layout constraints
      await page.evaluate(() => {
        const details = document.querySelectorAll('details');
        details.forEach(d => d.open = true);

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
      });

      // Scroll to bottom to trigger everything
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
          }, 50);
        });
      });

      await page.waitForTimeout(2000); 

      await page.screenshot({ 
        path: outputPath, 
        fullPage: true 
      });

      console.log(`   ✅ Saved: ${mod}_Question_Bank_Expanded.png`);
    } catch (e) {
      console.error(`   ❌ Failed for ${mod}:`, e);
    }
  }

  await browser.close();
  console.log(`\n✅ Bulk capture complete! Saved to: ${OUTPUT_DIR}`);
}

captureRemaining();
