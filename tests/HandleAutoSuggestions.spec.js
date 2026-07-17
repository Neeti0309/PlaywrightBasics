import { test, expect } from '@playwright/test';

test('Auto suggestion ', async({page})=>{
await page.goto('https://www.bing.com/');
await page.pause();
// await page.locator('#sb_form_q').fill('playwright');
await page.getByRole('combobox').fill('playwright');

await page.waitForTimeout(5000);

const values = await page.locator('//div[@class="sa_tm sa_mlti_line"]');

for(const val of await values.all()){
console.log(await val.textContent());
}

await page.close();
})