import { test, expect } from '@playwright/test';

test('handle date picker', async({page})=>{
await page.goto('https://jqueryui.com/datepicker/');
await page.pause();
const frame1=await page.frameLocator('//iframe[@class="demo-frame"]');
await frame1.locator('#datepicker').click();
await frame1.locator('//span[@class="ui-icon ui-icon-circle-triangle-e"]').click();
await frame1.getByText('29').click();

await page.close();
}) 


test.only('handle date picker 2', async({page})=>{
await page.goto('https://jqueryui.com/datepicker/');
await page.pause();
const frame1=await page.frameLocator('//iframe[@class="demo-frame"]');
await frame1.locator('#datepicker').click();
await frame1.locator('//td[@class=" ui-datepicker-days-cell-over  ui-datepicker-today"]//following::td[@class=" ui-datepicker-week-end "]').first().click();


await page.close();
}) 


//td[@class='value']//following::td[@class='value']
