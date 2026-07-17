import {test, expect} from '@playwright/test';

test('Put Example 1', async({request})=>{
const response = await request.put('https://api.restful-api.dev/objects/ff8081819d150699019d381dda1c3fe0',
{
headers: {"Content-Type": "application/json"},
data: { "name": "Surendra",
  "data": {
    "year": 2023,
    "price": 2849.99,
    "CPU model": "M Chip",
    "Hard disk size": "1 TB"
  }

}

}
)
const responseBody = await response.json();
console.log(responseBody);
console.log(responseBody.updatedAt)

})

test('Patch Example 1', async({request})=>{
const response = await request.patch('https://api.restful-api.dev/objects/ff8081819d150699019d381dda1c3fe0',
{
headers: {"Content-Type": "application/json"},
data: { "name": "jaganadam"}

}
)
const responseBody = await response.json();
console.log(responseBody);
console.log(responseBody.updatedAt)

})

test('Delete request', async({request})=>{
const response = await request.delete('https://api.restful-api.dev/objects/ff8081819d150699019d381dda1c3fe0');
const responseBody = await response.json();
console.log(responseBody.message)
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