import { test, expect } from '@playwright/test';


test('test 1 valid credentails', async ({ page }) => {
  
  await page.goto("https://www.saucedemo.com");
  const usernameTextField = await page.locator('[data-test="username"]');
  await expect(usernameTextField).toBeVisible();

  // await expect(await page.locator('[data-test="username"]')).toBeVisible();
  // await expect(usernameTextField).toBeHidden();
  await expect(usernameTextField).toBeEnabled();
  // await expect(usernameTextField).toBeDisabled();

  
  await page.close();
  
  
  });

test('test 2 invalid credentails', async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  const usernameTextField = await page.locator('[data-test="username"]');
  await expect(usernameTextField).toHaveCount(1);
  await expect(usernameTextField).toHaveAttribute('placeholder','Username');
  const loginButton = await page.locator('[data-test="login-button"]');
  await expect(loginButton).toHaveText('Login');
  await expect(loginButton).not.toHaveText('Surendra');



  await page.close();
  
  });


