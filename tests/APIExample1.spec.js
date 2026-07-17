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