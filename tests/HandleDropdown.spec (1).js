import { test, expect } from '@playwright/test';


test('Handle dropdown 1', async({page})=>{
await page.goto('https://www.salesforce.com/products/free-trial/developer/');
await page.pause();
await page.getByRole('combobox').selectOption('Algeria');
await page.getByLabel('Country/region').selectOption('Albania');
// await page.locator('//select[@name="country"]').selectOption('Afghanistan');
//tagname[attirbute='value']
await page.locator('select[name="country"]').selectOption('Afghanistan');
await page.locator('select[name="country"]').selectOption({index: 1});
await page.locator('select[name="country"]').selectOption({value:'BE'});

await page.close();
});


test('Handle dropdown 2', async({page})=>{
await page.goto('https://www.salesforce.com/products/free-trial/developer/');
await page.pause();
await page.waitForTimeout(10000);
// const ddOptions=await page.locator('select[name="country"]').getByRole('option').allTextContents();
// await expect(ddOptions.length).toBe(245);
// await expect(ddOptions).toContain('India');

// for(const value of ddOptions){
// console.log(value)
// }

//2nd approach to capture all vlues from the dropdown
const ddOptions=await page.locator('select[name="country"]').getByRole('option');
await expect(ddOptions).toHaveCount(245);
for(const value of await ddOptions.allTextContents()){
console.log(value);
}

await page.close();
});

test.only('Handle dropdown 3',async({page})=>{
await page.goto('https://getbootstrap.com/docs/5.3/components/dropdowns/');
await page.pause();
await page.locator('//button[@class="btn btn-secondary dropdown-toggle"]').first().click();
await page.locator('//a[text()="Another action"]').first().click();
await page.close();
})