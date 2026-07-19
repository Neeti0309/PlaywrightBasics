export class YourInfoPage{

constructor(page){
this.page= page;
this.firstNameTextField = page.locator('#first-name');
this.lastNameTextField = page.locator('#last-name');
this.zipcodeTextField = page.locator('#postal-code');
this.continueButton = page.locator('#continue');

}

async filltheForm(firstname, lastname, zipcode){
await this.firstNameTextField.fill(firstname);
await this.lastNameTextField.fill(lastname);
await this.zipcodeTextField.fill(zipcode);
await this.continueButton.click();
}
}