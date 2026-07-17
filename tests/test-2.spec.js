import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('surendra');  
  await page.locator('[data-test="password"]').fill('1234');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});

test.fail('test 2', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('surendra');  
  await page.locator('[data-test="password"]').fill('1234');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});

test.fixme('test 3', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('surendra');  
  await page.locator('[data-test="password"]').fill('1234');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});

test('test 4', async ({ page }) => {
  test.slow();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('surendra');  
  await page.locator('[data-test="password"]').fill('1234');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});
