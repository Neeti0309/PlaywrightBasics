import {test} from '@playwright/test';
import fs from 'fs';
import {parse} from 'csv-parse/sync';

const data = parse(fs.readFileSync('testData1.csv'),{
  columns: true,
  skip_empty_lines: true

})

/*
data --> array of objects
1st index ==> csv file 1st row
2nd index ==> 2nd row

*/

test('csv data 1', async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.locator('[data-test="username"]').fill(data[0].username);  
await page.locator('[data-test="password"]').fill(data[0].password);
await page.waitForTimeout(3000);
await page.close();
})


for(const record of data){

test('csv data 1: '+record.username, async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.locator('[data-test="username"]').fill(record.username);  
await page.locator('[data-test="password"]').fill(record.password);
await page.waitForTimeout(3000);
await page.close();
})


}



