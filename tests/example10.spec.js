import {test} from '@playwright/test';


test('Indeitfy by its alt text', async ({page})=> {
await page.goto('https://www.bing.com/');
await page.pause();

await page.getByAltText('© Moneycontrol').first().click();

await page.close();


});

test.only('Indeitfy by its data-testID', async ({page})=> {
await page.goto('https://www.emirates.com/in/english/book/?utm_source=');
await page.pause();
// await page.getByRole('button', { name: 'Accept' }).click();
await page.getByRole('button',{name: 'Accept'}).click();
await page.getByTestId('combobox_Departure airport').click();

await page.close();


});