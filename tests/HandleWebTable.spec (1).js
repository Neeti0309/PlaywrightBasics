import { test, expect } from '@playwright/test';


/*

table tag
tbody --. table bodty
tr--> table row
td/th ==> table column

2nd row 1st column value 

(//tagname[@attirbute='value'])[1]

*/

test('handling webtables' ,async({page})=>{
await page.goto('https://www.w3schools.com/html/html_tables.asp');
const tableRows = await page.locator('#customers').getByRole('row');

// const value1=await tableRows.nth(1).locator('//td[1]').textContent();
const value1=await tableRows.nth(1).locator('//td').first().textContent();
console.log(value1);

// const value2 = await tableRows.nth(1).locator('//td[1]').innerText();
const value2 = await tableRows.nth(1).locator('//td').first().innerText();
console.log(value2)


await page.close();
})


test('handling webtables 2' ,async({page})=>{
await page.goto('https://www.w3schools.com/html/html_tables.asp');
const tableRows = await page.locator('#customers').getByRole('row');
for(let i=1; i< await tableRows.count(); i++){
const val=await tableRows.nth(i).locator('//td[3]').textContent();
console.log(val)
}

await page.close();
})

/*
tableRows.nth(1) --> 2nd row 

u need all the rows 
nth(1-6) -->< for loop f we are irerating on all the rows 
*/
