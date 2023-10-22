import { expect, test } from "@playwright/test";

test('', async({request}) => {
// Construct data


//Send delete request to delete existing post
const url = 'https://jsonplaceholder.typicode.com/posts/1';

let response = await request.delete(url);

//Verification
expect(response.status()).toBe(200);

let res = await request.get("https://jsonplaceholder.typicode.com/posts/1");
console.log(res.status());
expect(res.status()).toBe(200);

})