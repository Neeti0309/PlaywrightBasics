import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('surendra');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('1234');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});