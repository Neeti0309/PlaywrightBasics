export class HomePage{

constructor(page){
this.page = page;
this.addProduct= page.locator('#add-to-cart-sauce-labs-backpack');
this.cartLogo = page.locator('#shopping_cart_container');
this.sidemenuBar = page.locator('#react-burger-menu-btn');
this.logoutButton = page.locator('#logout_sidebar_link');
}


async addItemToCart(){
await this.addProduct.click();
await this.cartLogo.click();

}


async logoutFromApplication(){
await this.sidemenuBar.click();
await this.logoutButton.click();
}

}