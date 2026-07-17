import {test, expect} from '@playwright/test';

test('Post Example 1', async({request})=>{
const response = await request.post('https://api.restful-api.dev/objects',
{
headers: {"Content-Type": "application/json"},
data: { "name": "Surendra Macbook",
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
const fieldName = "CPU model";
const model = responseBody.data[fieldName]
console.log(model);

})

/*
{
  id: 'ff8081819d150699019d381033983fd5',
  name: 'Surendra Macbook',
  createdAt: 1774762079128,
  data: {
    year: 2023,
    price: 2849.99,
    'CPU model': 'M Chip',
    'Hard disk size': '1 TB'
  }
}

*/