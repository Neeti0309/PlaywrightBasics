import { test, expect, chromium } from '@playwright/test';

test('E2E scenario 1', async({page})=>{
await page.goto('https://www.saucedemo.com');

//login to applicaiton
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();

//add prodyct to cart
await page.locator('#add-to-cart-sauce-labs-backpack').click();

//click on cart logo
await page.locator('#shopping_cart_container').click();

//checkbout button
await page.locator('#checkout').click();

//fillform
await page.locator('#first-name').fill('surendra');
await page.locator('#last-name').fill('jagandam');
await page.locator('#postal-code').fill('500082');
await page.locator('#continue').click();

//finish order
await page.locator('#finish').click()

//back to home
await page.locator('#back-to-products').click()

//logout from the application
await page.locator('#react-burger-menu-btn').click()
await page.locator('#logout_sidebar_link').click()

//close the browser
await page.close();

});