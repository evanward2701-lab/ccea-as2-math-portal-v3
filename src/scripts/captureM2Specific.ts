import { chromium } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

const OUTPUT_PATH = '/Users/evanward/Desktop/M2-Question-Bank-Focus.png';
const TARGET_URL = 'http://localhost:3000/practice/M2/General';

async function captureM2() {
  console.log('🚀 Capturing M2 Question Bank with all solutions expanded...');

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 1080 });

  try {
    await page.goto(TARGET_URL, { waitUntil: 'networkidle' });
    
    // Expand all solutions and remove layout constraints
    await page.evaluate(() => {
      // Open all details
      const details = document.querySelectorAll('details');
      details.forEach(d => d.open = true);

      // Remove height/overflow constraints for full-page snap
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
      path: OUTPUT_PATH, 
      fullPage: true 
    });

    console.log(`✅ Success! Screenshot saved to: ${OUTPUT_PATH}`);
  } catch (e) {
    console.error('❌ Capture failed:', e);
  } finally {
    await browser.close();
  }
}

captureM2();
