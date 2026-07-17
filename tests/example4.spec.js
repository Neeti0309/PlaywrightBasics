import {test} from '@playwright/test';


test('my 1st test', async ({page})=> {
await page.goto('https://www.saucedemo.com');

//by ID
page.locator('#user-name');

//by tagname
page.locator('input');

//classname
page.locator('.input_error');
page.locator('.form_input');

//atreibute
page.locator('[class="input_error form_input"]');

//muiltiple attributes
page.locator('#user-name.form_input[placeholder="Username"]');

//text
page.locator(':text("Log")');
page.locator(':has-text("Log")');
page.locator(':text-is("Login")');

})

/*
await use chayli
test --> async test

class A --> identiy a perso n give 5000$ to him
name=ramya
fatherame=dass
mothername=lakshmi
age=25
address=hyderbad
adhardcardno: 1232342342332
pancardno: 1234abcd
grade: 4, class A, roolno: 1
lastnmae= raeddy
propertytype= propertyvalue\
attributetype=atibutevalue


*/