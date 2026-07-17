import {test} from '@playwright/test';


test('Parent & Child locators', async ({page})=> {
await page.pause();
await page.goto('https://www.bookmyshow.com');
// await page.locator('[class="sc-p6ayv6-2 GisMu"]').locator('[class="sc-1jg5yz-0 iZEAA"]').getByText("Hyderabad").click();

// const parentLocator = await page.locator('[class="sc-p6ayv6-2 GisMu"]');
// await parentLocator.locator('[class="sc-1jg5yz-0 iZEAA"]').getByText("Hyderabad").click();

// const hyderabadLocator = await page.locator('[class="sc-p6ayv6-2 GisMu"]').locator('[class="sc-1jg5yz-0 iZEAA"]').getByText("Hyderabad");
// await hyderabadLocator.click();

await page.locator('ul', {hasText: "Hyderabad"}).getByText("Kochi").click();


await page.close();


});


