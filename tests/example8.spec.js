import {test} from '@playwright/test';


test('Identify element using its Label', async ({page})=> {
await page.goto('https://www.salesforce.com/products/free-trial/developer/');
await page.pause(); 
await page.getByLabel('First name').fill('surendra');
await page.getByLabel('Last name').fill('surendra');
//job title, company, work email
await page.getByLabel('Job title').fill('QA');
await page.getByLabel('Company').fill('surendra');
await page.getByLabel('Work email').fill('demo@yopmail.com');

await page.close();


});

test('Identify element using its Placeholder', async ({page})=> {
await page.goto('https://www.saucedemo.com/');
await page.pause(); 
await page.getByPlaceholder('Username').fill('surendra');
await page.getByPlaceholder('Password').fill('surendra');

await page.close();


});

/*
https://www.salesforce.com/uk/form/signup/sales-ee/
fname, lname, job title --> placehodler

*/

test('Identify element using its Placeholder 2', async ({page})=> {
await page.goto('https://www.salesforce.com/uk/form/signup/sales-ee/');
await page.pause(); 
await page.getByRole('textbox',{name:'First name'}).fill('surendra');

await page.close();


});


