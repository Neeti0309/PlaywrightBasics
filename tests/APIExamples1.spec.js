import {test, expect} from '@playwright/test';


test('Example for API Get Request 1', async({request})=>{
const response = await request.get('https://api.restful-api.dev/objects/');
console.log(await response.json());
console.log(response.status());
expect(response.status()).toBe(201);
/*
response; server:
header, body, status code
*/
})

test('Example for GET Request 2',async({request})=>{
const response = await request.get('https://api.restful-api.dev/objects/7');
const responseBody = await response.json();
console.log(responseBody);
const nameValue = responseBody.name
console.log(nameValue);
const mnftYear = responseBody.data.year
console.log(mnftYear);
expect(mnftYear).toBe(2019);

})