import {test} from '@playwright/test'
import {LoginPage} from '../PageObjects/LoginPage.js'
import {HomePage} from '../PageObjects/HomePage.js'
import { YourCartPage } from '../PageObjects/YourCartPage.js'
import { YourInfoPage } from '../PageObjects/YourInfoPage.js'
import { OverviewPage } from '../PageObjects/OverviewPage.js'
import { CompletePage } from '../PageObjects/CompletePage.js'

test('E2E Scenario 1', async({page})=>{
const loginPageInstance = new LoginPage(page)
const homePageInstance = new HomePage(page)
const yourCartPageInstance = new YourCartPage(page);
const overviewPageInstance = new OverviewPage(page);
const completePageInstance = new CompletePage(page);
const yourInfoPageInstance = new YourInfoPage(page);

await loginPageInstance.openAplication()
await loginPageInstance.loginToApplication('standard_user', 'secret_sauce')
await page.waitForTimeout(1000)


await homePageInstance.addItemToCart()
await page.waitForTimeout(1000)


await yourCartPageInstance.checkoutOperation();
await page.waitForTimeout(1000);


await yourInfoPageInstance.filltheForm('surendra','jagandam','500082');
await page.waitForTimeout(1000);


overviewPageInstance.placeOrder();
await page.waitForTimeout(1000);


await completePageInstance.navigateBackToHome();

await page.waitForTimeout(1000);
await homePageInstance.logoutFromApplication();
await loginPageInstance.closeApplication()
})


test('E2E Scneaior 2', async({page})=>{

})