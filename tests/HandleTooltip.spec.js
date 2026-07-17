import { test, expect } from '@playwright/test';

test('Handling tool tip on jquery ui ', async({page})=>{
await page.goto('https://jqueryui.com/tooltip/');
const frame1= await page.frameLocator('//iframe[@class="demo-frame"]');
const val = await frame1.locator('#age').getAttribute('title');
console.log(val);

await page.close();
})