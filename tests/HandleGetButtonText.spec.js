import { test, expect } from '@playwright/test';

/*
why cant we geta text from any elemnt
Hyderabad : 5th element 
first --> 
last -->  
nth --> nenu index
0 --> 1st element 
1 --> 2nd element

4 --> 5th element


*/

test('Handle button or any element text', async ({page})=>{
await page.goto('https://in.bookmyshow.com/');
await page.pause();
// const val = await page.locator('//p[@class="sc-1jg5yz-4 cVsVcL"]').nth(4).textContent();
const val = await page.locator('//p[@class="sc-1jg5yz-4 cVsVcL"]').allTextContents();
console.log(val);
await page.close();

});