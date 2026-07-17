import { test, expect } from '@playwright/test';

test.describe('saucedemo login testcases', () => {
test('test 1 valid credentails', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');  
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });

   test('test 2 invalid credentails', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard');  
  await page.locator('[data-test="password"]').fill('sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });

   test('test 3 invalid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');  
  await page.locator('[data-test="password"]').fill('1234');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });

   test('test 4 invalid username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard');  
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });




});

  