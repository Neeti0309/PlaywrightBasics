import { test, expect } from '@playwright/test';

test('Handle radio buttons', async({page})=>{
await page.goto('https://www.bing.com/account/general?ru');
await page.pause();
await page.locator('#adlt_set_strict').check();
await page.getByRole('radio',{name: 'Moderate'}).check();
await page.getByLabel('Off').first().check();

await page.close();

})


test('Handle radio buttons2', async({page})=>{
await page.goto('https://www.bing.com/account/general?ru');
await page.pause();
await page.locator('#adlt_set_strict').check();
// await expect(page.locator('#adlt_set_strict')).toBeChecked();
await expect(await page.locator('#adlt_set_strict').isChecked()).toBeTruthy();
await expect(await page.getByRole('radio',{name: 'Moderate'}).isChecked()).toBeFalsy();
await page.close();

})