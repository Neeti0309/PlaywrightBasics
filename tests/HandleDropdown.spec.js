import { test, expect } from '@playwright/test';


test('Handle dropdown 1', async({page})=>{
await page.goto('https://www.salesforce.com/products/free-trial/developer/');
await page.pause();
// await page.getByRole('combobox').selectOption('Algeria');
// await page.getByLabel('Country/region').selectOption('Angola');
// await page.locator('//*[@name="country"]').selectOption('Afghanistan');
// await page.locator('select[name="country"]').selectOption('Afghanistan');
await page.locator('select[name="country"]').selectOption({index: 1});
await page.locator('select[name="country"]').selectOption({value: 'BS'});
/*
based on its index 
based on its value attribute also 
*/
await page.close();
});

test('Handle dropdown 2', async({page})=>{
await page.goto('https://www.salesforce.com/products/free-trial/developer/');
await page.pause();
await page.waitForTimeout(10000);
// const ddOptions = await page.locator('select[name="country"]').getByRole('option').allTextContents();
// await expect(ddOptions).toContain('India');
// console.log(ddOptions.length)
// await expect(ddOptions.length).toBe(245);


// for(const value of ddOptions){
// console.log(value)
// }


//2nd approach of getting values from the dropdown
const ddOptions = await page.locator('select[name="country"]').getByRole('option');
await expect(ddOptions).toHaveCount(245);
for(const value of await ddOptions.allTextContents()){
console.log(value)

}

await page.close();
});

