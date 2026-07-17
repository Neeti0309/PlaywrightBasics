import { test as base } from '@playwright/test';

export const test = base.extend({
qaURL:  async ({ }, use) =>{
const qaURL="big.com";
console.log("before fixture")
await use(qaURL)
console.log("after fixture")
}
})

