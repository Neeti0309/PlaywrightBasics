import { test, expect } from '@playwright/test';

test('Alert Handling 1',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
await page.pause();

//dialog handler
page.on('dialog', async dialog =>{
console.log(dialog.message());
console.log(dialog.type());
expect(dialog.message()).toBe('I am a JS Alert');
expect(dialog.type()).toBe('alert');
await dialog.accept();
})

await page.locator('//button[text()="Click for JS Alert"]').click();

await page.close();

})