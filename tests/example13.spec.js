import {test} from '@playwright/test';


test('xpath Selector 1', async ({page})=> {
await page.pause();
await page.goto('https://www.saucedemo.com');
await page.locator('//input[@placeholder="Username"]').click();
await page.locator('xpath=//input[@placeholder="Username"]').click();

await page.close();


});

test('xpath Selector 2', async ({page})=> {
await page.pause();
await page.goto('https://www.bookmyshow.com');
await page.locator('//li').filter({hasText: "Hyderabad"}).click();

await page.close();


});


