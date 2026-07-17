import { test, expect } from '@playwright/test';

test('Handle frame1', async({page})=>{
await page.goto('https://jqueryui.com/tooltip/');
await page.pause();
// const frame1= await page.frameLocator('.demo-frame');
// await frame1.locator('#age').fill('surendra');

const frame1=await page.frame({url: 'https://jqueryui.com/resources/demos/tooltip/default.html'});
await frame1.locator('#age').fill('jaganadam');

await page.close();
});


test.only('Handle frame2', async({page})=>{
await page.goto('https://ui.vision/demo/webtest/frames/');
await page.pause();

const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
const childframes=await frame3.childFrames();

await childframes.at(0).locator('//*[@id="i6"]/div[3]/div').check();


await page.close();
});
