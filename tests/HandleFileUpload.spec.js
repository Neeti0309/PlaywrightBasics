import { test, expect } from '@playwright/test';

test('File upload 1', async({page})=>{
await page.goto('https://the-internet.herokuapp.com/upload');
await page.pause();
await page.locator('#file-upload').setInputFiles('tests/image9.png');
await page.locator('#file-submit').click();

await page.close();
})

test('File remove 2', async({page})=>{
await page.goto('https://the-internet.herokuapp.com/upload');
await page.pause();
await page.locator('#file-upload').setInputFiles('tests/image9.png');
await page.locator('#file-upload').setInputFiles([]);

await page.close();
})

test.only('File upload 3', async({page})=>{
await page.goto('https://www.file.io/');
await page.pause();

await page.locator('//label[@for="select-files-input"]').setInputFiles(['tests/image8.png', 'tests/image9.png']);

await page.close();
})