import { test, expect } from '@playwright/test';


test('test 1 valid credentails', async ({ page }) => {
  const inputNumber = 10;
  expect(inputNumber).toEqual(11);

  await page.goto("https://www.saucedemo.com");
  
  await page.close();
  
  
  });

test('test 2 invalid credentails', async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  const loginLocator = await page.locator('[data-test="login-button"]');
  await expect(loginLocator).toHaveText('Surendra');
  
  await page.close();
  
  });


