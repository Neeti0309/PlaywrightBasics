import { test, expect } from '@playwright/test';


test('test 1 valid credentails', async ({ page }) => {
  const inputNumber = 10;
  expect.soft(inputNumber).toEqual(11);

  await page.goto("https://www.saucedemo.com");
  
  await page.close();
  
  
  });

test('test 2 invalid credentails', async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  /*
  1. url based asserton
  2. title of a webpage

  */
//  await expect(page).toHaveURL("https://www.surendrademo.com");
  await expect(page).toHaveTitle('Surendra Labs');

  
  await page.close();
  
  });


