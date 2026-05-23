import { chromium } from 'playwright';

async function capture() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 1440, height: 1200 });
  await page.goto('http://localhost:3000/compare', { waitUntil: 'networkidle' });
  
  // Wait a bit for everything to render
  await page.waitForTimeout(3000);

  // Force body and main to auto height to capture full page
  await page.evaluate(() => {
    document.body.style.height = 'auto';
    document.documentElement.style.height = 'auto';
    const main = document.querySelector('main');
    if (main instanceof HTMLElement) {
      main.style.overflow = 'visible';
      main.style.height = 'auto';
      main.style.flex = 'none';
    }
    const rootWrapper = document.querySelector('#root > div');
    if (rootWrapper instanceof HTMLElement) {
      rootWrapper.style.height = 'auto';
      rootWrapper.style.overflow = 'visible';
    }
  });

  await page.waitForTimeout(1000);
  
  await page.screenshot({ path: '/Users/evanward/Desktop/Diagram-Comparison.png', fullPage: true });
  await browser.close();
  console.log('✅ Screenshot saved to /Users/evanward/Desktop/Diagram-Comparison.png');
}

capture();
