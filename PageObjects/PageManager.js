import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { YourCartPage } from "./YourCartPage";
import { YourInfoPage } from "./YourInfoPage";
import { OverviewPage } from "./OverviewPage";
import { CompletePage } from "./CompletePage";

export class PageManager{
constructor(page){
this.page = page;
this.loginPageInstance = new LoginPage(page);
this.homePageInstance = new HomePage(page);
this.yourCartPageInstance = new YourCartPage(page);
this.yourInfoPageInstance = new YourInfoPage(page);
this.overviewPageInstance = new OverviewPage(page);
this.completePageInstance = new CompletePage(page);
}

getCompletePageInstance(){
return this.completePageInstance;
}

getOveviewPageInstance(){
return this.overviewPageInstance;
}

getYourInfoPageInstance(){
return this.yourInfoPageInstance;
}

getYourCartPageInstance(){
return this.yourCartPageInstance;
}

getHomePageInstance(){
return this.homePageInstance;
}

getLoginPageInstance(){
return this.loginPageInstance;
}

}