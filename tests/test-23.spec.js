import {test} from '@playwright/test'
import jsonData from '../tests/testData4.json';

test('Read JSON Data 1', async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill(jsonData.username);
await page.locator('#password').fill(jsonData.password);
await page.waitForTimeout(3000);
await page.close();
})

for(const record of jsonData){
test('Read JSON Data 1:'+record.username, async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill(record.username);
await page.locator('#password').fill(record.password);
await page.waitForTimeout(3000);
await page.close();
})

}

jsonData.forEach(record =>{
test('Read JSON Data 2:'+record.username, async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill(record.username);
await page.locator('#password').fill(record.password);
await page.waitForTimeout(3000);
await page.close();
})

})