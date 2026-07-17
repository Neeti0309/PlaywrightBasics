import { test, expect } from '@playwright/test';

test('handle checkbox', async ({page})=>{
await page.goto('https://www.bing.com/account/general?ru');
await page.pause();
await page.locator('#enAS').uncheck();
await page.getByLabel('See search suggestions as you type').check();
await page.getByRole('checkbox', {name:'See search suggestions as you type'}).uncheck();
await page.close();
});