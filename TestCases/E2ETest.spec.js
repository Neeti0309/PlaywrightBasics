import {test} from '@playwright/test'
import { PageManager } from '../PageObjects/PageManager'

test('E2E Scenario 1', async({page})=>{
const pageManagerInst = new PageManager(page);

await pageManagerInst.getLoginPageInstance().openAplication()
await pageManagerInst.getLoginPageInstance().loginToApplication('standard_user', 'secret_sauce')
await page.waitForTimeout(1000)

await pageManagerInst.getHomePageInstance().addItemToCart()
await page.waitForTimeout(1000)

await pageManagerInst.getYourCartPageInstance().checkoutOperation();
await page.waitForTimeout(1000);


await pageManagerInst.getYourInfoPageInstance().filltheForm('surendra','jagandam','500082');
await page.waitForTimeout(1000);


await pageManagerInst.getOveviewPageInstance().placeOrder();
await page.waitForTimeout(1000);


await pageManagerInst.getCompletePageInstance().navigateBackToHome();

await page.waitForTimeout(1000);
await pageManagerInst.getHomePageInstance().logoutFromApplication();
await pageManagerInst.getLoginPageInstance().closeApplication()
})

