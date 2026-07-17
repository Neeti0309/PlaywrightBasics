import { test, expect } from '@playwright/test';

test('handle checkbox', async ({page})=>{
await page.goto('https://www.bing.com/account/general?ru');
await page.pause();
await page.locator('#enAS').uncheck();
await page.getByLabel('See search suggestions as you type').check();
await page.getByRole('checkbox', {name:'See search suggestions as you type'}).uncheck();
await page.close();
});

test.only('handle checkbox2', async ({page})=>{
await page.goto('https://www.bing.com/account/general?ru');
await page.pause();

const checkboxes = await page.getByRole('checkbox');
for(const checkbox of await checkboxes.all()){
await checkbox.uncheck();
await expect(checkbox).not.toBeChecked();
}


await page.close();
});

test('handle checkbox 3', async ({page})=>{
await page.goto('https://www.bing.com/account/general?ru');
await page.pause();
await page.locator('#enAS').uncheck();
await page.uncheck('#enAS');
await page.fill('#username', 'surendra');

await page.close();
});
