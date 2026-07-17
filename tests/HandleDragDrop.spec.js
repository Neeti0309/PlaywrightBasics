import { test, expect } from '@playwright/test';

test('Handle drag n drop operation', async({page})=>{
await page.goto('https://jqueryui.com/droppable/');
await page.pause();
const frame1=await page.frameLocator('//iframe[@class="demo-frame"]');
await frame1.locator('#draggable').dragTo(frame1.locator('#droppable'));
await page.close();
})

test.only('Handle drag n drop operation 2', async({page})=>{
await page.goto('https://jqueryui.com/droppable/');
await page.pause();
const frame1=await page.frameLocator('//iframe[@class="demo-frame"]');
// await frame1.locator('#draggable').dragTo(frame1.locator('#droppable'));
await frame1.locator('#draggable').hover();
await page.mouse.down();
await frame1.locator('#droppable').hover();
await page.mouse.up();


await page.close();
})