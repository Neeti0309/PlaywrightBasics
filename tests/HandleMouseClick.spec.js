import { test, expect } from '@playwright/test';

test("Handle mouse click", async({page})=>{
await page.goto('https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml5_ev_ondblclick');
await page.pause();
const frame1=await page.frameLocator('#iframeResult');

// await frame1.locator('//button[text()="Double-click me"]').dblclick();

// await frame1.locator('//button[text()="Double-click me"]').click({button: 'right'});
// await frame1.locator('//button[text()="Double-click me"]').click({ position: { x: 0, y: 0 } });
await frame1.locator('//button[text()="Double-click me"]').click({force: true});
await page.close();

});

//update this prograkm to click on accept button 
test('Hover mouse', async({page})=>{
await page.goto('https://www.emirates.com/in/english/book/?utm_source=');
await page.pause();
//here u need to write the code to perfrom a click iperation on accept button
await page.locator('//*[text()="About booking online"]').first().hover();
await page.close();

})


test.only('press sequrntially', async({page})=>{
await page.goto('https://www.saucedemo.com');
await page.pause();
// await page.locator('#user-name').pressSequentially('surendra', {delay: 400});
await page.locator('#user-name').press('$');
await page.close();
})

