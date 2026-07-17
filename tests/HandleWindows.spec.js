import { test, expect, chromium } from '@playwright/test';

test('Handling windows 1', async({})=>{
const browser = await chromium.launch(); //chrome browser
const context = await browser.newContext(); // profile
const page = await context.newPage(); // tab which u r operning on that profile

await page.goto('https://www.amazon.com');
await page.pause();

await page.close();
await context.close();
await browser.close();


});


test('Handling windows 2', async({})=>{
const browser = await chromium.launch(); //chrome browser
const context = await browser.newContext(); // profile
const page1 = await context.newPage(); // tab which u r operning on that profile
const page2 = await context.newPage();

await page1.pause();

await page1.goto('https://www.amazon.com');
await page2.goto('https://www.bing.com');

await page1.close();
await page2.close();
await context.close();
await browser.close();


});

test.only('Handling windows 3', async({})=>{
const browser = await chromium.launch(); //chrome browser
const context = await browser.newContext(); // profile
const page = await context.newPage(); // tab which u r operning on that profile

await page.goto('https://www.hdfc.com');
await page.pause();

const pagePromise = context.waitForEvent('page');
await page.getByText('Blogs').first().click();
const newPage = await pagePromise;

await newPage.locator('#close-disclaimer').click();

await newPage.close();
await page.close();
await context.close();
await browser.close();


});