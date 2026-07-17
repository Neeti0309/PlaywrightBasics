import { test, expect } from '@playwright/test';

/*
builtin locators --> by default
fill --> val;ue enter
clear --> value clear
inputValue --> text field entered value

skip --> skip
only --> only that test wil be executed

*/

//Job title, Compnay , work email : using its label handle it
test.only('Handling texxt fields 3', async ({page}) =>{
await page.goto('https://www.salesforce.com/products/free-trial/developer/');
await page.pause();
await page.getByLabel('First name').fill('surendra');
await page.getByLabel('Last name').fill('jaganadam');
await page.close();

});


test('Handling text field 2 ', async ({page}) => {
await page.goto('https://www.saucedemo.com/');
await expect(page.locator('#user-name')).toBeVisible();
await expect(page.locator('#user-name')).toBeEnabled();
await expect(page.locator('#user-name')).toBeEditable();
await expect(page.locator('#user-name')).toBeEmpty();

await page.close();

});

test('Handling text fields 1', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.pause();
  await page.locator('#user-name').fill('surendra');
  await page.locator('#user-name').clear();

  await page.getByRole('textbox', {name: 'Username'}).fill('jaganadam');
  await page.getByRole('textbox', {name: 'Username'}).clear();

  await page.getByRole('textbox').first().fill('surendra');
  const val = await page.getByRole('textbox').first().inputValue();
  console.log(val);

  await page.close();
  
  });

