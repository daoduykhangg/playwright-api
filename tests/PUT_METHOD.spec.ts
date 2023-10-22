import { expect, test } from "@playwright/test";

test("Should be able to update a existing post", async({request}) => {
  //Construct data

  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  const data = {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1
  }
  const options = {
    data: data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }

  //Send PUT request to update data
  let response = await request.put(url,options);
  // console.log(response);
  let bodyJson = await response.json();

  //Verification
  expect(response.status()).toBe(200);
  const {id, title, body, userId} = bodyJson;
  expect(id).toBe(data.id);
  expect(title).toBe(data.title);
  expect(body).toBe(data.body);
  expect(userId).toBe(data.userId);
  expect(bodyJson.id).toBe(1);


})