export class CompletePage{
constructor(page){
this.page = page;
this.backToHomeButton = page.locator('#back-to-products');
this.confirmationMessage = page.locator('#checkout_complete_container')
}

async navigateBackToHome(){
await this.confirmationMessage.waitFor();
await this.backToHomeButton.click();
}

}