import {test} from "../myFixture2.js"

test('verify browser launch', async({page, loginlogoutSetup})=>{
await page.waitForTimeout(1000)
await page.locator('#sb_form_q').fill('surendra');
await page.waitForTimeout(1000)
})