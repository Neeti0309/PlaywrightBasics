import {test} from '@playwright/test';


test('Indeitfy by its text', async ({page})=> {
await page.goto('https://www.salesforce.com/uk/form/signup/sales-ee/');
await page.pause();
await page.getByText('Next').click();

await page.close();


});

test('Indeitfy by its text 2', async ({page})=> {
await page.goto('https://www.salesforce.com/products/free-trial/developer/');
await page.pause();
await page.getByText('Sign me up').click();

await page.close();


});

test.only('Indeitfy by its title', async ({page})=> {
await page.goto('https://jqueryui.com/tooltip/');
await page.pause();
await page.getByTitle('jQuery UI').first().click();

await page.close();


});

/*
https://www.salesforce.com/products/free-trial/developer/
click on Sign me up button using its text

*/