import {test, expect} from '@playwright/test';

test('Get All Dashboard', async({request})=>{
  const username = "neetimishra.nz@gmail.com";
const password = "<ATLASSIAN_API_TOKEN>";
  const credentails = `${username}:${password}`
  const base64 = Buffer.from(credentails).toString('base64');
const response = await request.get('https://neetimishranz.atlassian.net/rest/api/3/dashboard',
{
headers: {
  "Authorization": `Basic ${base64}`
},


}
)
const responseBody = await response.json();
console.log(responseBody);


})

/*
{
  id: 'ff8081819d150699019d381dda1c3fe0',
  name: 'Surendra Macbook',
  createdAt: 1774762973724,
  data: {
    year: 2023,
    price: 2849.99,
    'CPU model': 'M Chip',
    'Hard disk size': '1 TB'
  }
}

*/