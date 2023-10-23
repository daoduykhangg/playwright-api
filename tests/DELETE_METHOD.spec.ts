import { expect, test } from "@playwright/test";

test('Should be able to send a delete request', async({request}) => {
// Construct data


//Send delete request to delete existing post
const url = 'https://jsonplaceholder.typicode.com/posts/1';

let response = await request.delete(url);
const bodyJson = await response.json();
console.log(bodyJson);

//Verification
expect(response.status()).toBe(200);

})