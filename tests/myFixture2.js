import { test as base } from '@playwright/test';

export const test = base.extend({
loginlogoutSetup:  async ({page }, use) =>{
await page.goto('https://www.bing.com');
console.log("before fixture")
await use()
console.log("after fixture")
await page.close();
}
})

