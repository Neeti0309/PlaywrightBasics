import {test} from '@playwright/test'
import jsonData from '../tests/testData3.json';

test('Read JSON Data 1', async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill(jsonData.username);
await page.locator('#password').fill(jsonData.password);
await page.waitForTimeout(3000);
await page.close();
})