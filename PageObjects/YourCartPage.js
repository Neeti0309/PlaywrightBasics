export class YourCartPage{

constructor(page){
this.page=page;
this.checkoutButton = page.locator('#checkout');

}

async checkoutOperation(){
await this.checkoutButton.click();
}

}