import {test} from '@playwright/test';


test('css Selector 1', async ({page})=> {
// await page.pause();
await page.goto('https://www.bookmyshow.com');


// await page.locator('css=img:visible').click();
// await page.locator('css=img:visible').last().click();
// await page.locator('css=img:visible').first().click();
// await page.locator('css=img:visible').nth(1).click();
// await page.locator('css=div:visible').locator('p:has-text("  hyderabad")').click();
// await page.locator('css=div:visible').locator('p:text-is("Hyderabad ")').click();
// await page.locator('css=div:visible').locator('p:text("hyder")').click();
// await page.locator('css=div:visible').locator(':is(p:has-text("Hyderabad"), div:has-text("surendra"))').click();
await page.locator('li:has(p)').first().click();

/*
first() --> it will identify 1st element
last() --> it will identify tghe last element
nth(index) --> whichever the element u want to click just specify the index

0th index ==> 1st element 
1st index --> 2nd element


99th index--> 100th element

there are 18 elemnts with the given locators n when the page loaded it was
able to see only 5 or 10 remamining its not disp[layin]
thgats tge reason ur playwright us wiing for the 18th element 
ideally that elemnt will diosplay whenever the page got loaded hence
i selected that city manually n then sceript executed firther
*/




await page.close();


});
