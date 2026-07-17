import { test, expect } from '@playwright/test';


test('test 1 valid credentails', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.pause();
  await page.locator('[data-test="username"]').fill('standard_user');  
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  
  await page.close();
  
  });

  test('test 2 valid credentails', async ({ page }, testInfo) => {
  if(testInfo.project.name==="surendra879"){
//use these locators for this prioject
  }
  await page.goto('https://www.saucedemo.com/');
  await page.pause();
  await page.locator('[data-test="username"]').fill('standard_user');  
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  
  await page.close();
  
  });

