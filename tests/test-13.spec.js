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

