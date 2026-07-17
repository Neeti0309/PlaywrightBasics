import { test, expect } from '@playwright/test';


test('test for auto-waiting 1', async ({ page }) => {
  
  await page.goto("http://uitestingplayground.com/ajax");
  await page.locator('#ajaxButton').click();
  await page.waitForTimeout(18000);//hardcoded timeout
  await page.locator('.bg-success').click();
  
  await page.close();
  
  
  });

  test('test for auto-waiting 2', async ({ page }) => {
  
  await page.goto("http://uitestingplayground.com/ajax");
  await page.locator('#ajaxButton').click();
  await page.waitForSelector('.bg-success');
  await page.locator('.bg-success').click();
  
  await page.close();
  
  
  });


  test('test for auto-waiting 3', async ({ page }) => {
  
  await page.goto("http://uitestingplayground.com/ajax");
  await page.locator('#ajaxButton').click();
  // const val = await page.locator('.bg-success').textContent();
  const val = await page.locator('.bg-success').allTextContents();
  console.log(val);
  
  await page.close();
  
  
  });



test('auto waiting 4', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');  
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.waitForURL('https://www.saucedemo.com/ surendra.html');
  await page.close();
  
  });


  test('test for auto-waiting 5', async ({ page }) => {
  test.setTimeout(20000);
  test.slow();
  await page.goto("http://uitestingplayground.com/ajax");
  await page.locator('#ajaxButton').click();
  await page.locator('.bg-success').waitFor({state: 'visible'});
  await page.locator('.bg-success').click({timeout: 20000});
  await expect(page.locator('.bg-success')).toHaveText('Data loaded with AJAX get request.', {timeout: 20000});
  
  await page.close();
  
  
  });
