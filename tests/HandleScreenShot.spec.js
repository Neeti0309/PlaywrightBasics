import { test, expect } from '@playwright/test';

test('capture screenshot 1', async({page})=>{
await page.goto('https://www.flipkart.com')
await page.waitForTimeout(5000);
// await page.screenshot({ path: 'tests/images/screenshot.png' });
await page.screenshot({ path: 'tests/images/screenshot_' + Date.now()+'.png' });
await page.close();
})

test('capture screenshot 2', async({page})=>{
await page.goto('https://www.amazon.com')
await page.waitForTimeout(5000);
// await page.screenshot({ path: 'tests/images/screenshot.png' });
// await page.screenshot({ path: 'tests/images/screenshot_' + Date.now()+'.png', fullPage: true  });
await page.locator('input[placeholder="Search Amazon"]').screenshot({ path: 'tests/images/screenshot_' + Date.now()+'.png' });
await page.close();
})