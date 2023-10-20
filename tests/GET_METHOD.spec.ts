import { expect, test } from "@playwright/test";

test('should be able to send a GET method request', async({request}) => {
  let response = await request.get("https://jsonplaceholder.typicode.com/posts");
  
  //Extract response data
  const jsonResponse = await response.json();
  const status = response.status()
  const randomIndex = Math.floor(Math.random() * jsonResponse.length);

  const randomPost = jsonResponse[randomIndex];

  // console.log(jsonResponse);
  // console.log(status);
  console.log(randomPost);
  expect(status).toBe(200);
  expect(jsonResponse.length).toBeGreaterThan(1);
  //Destructure
  const {userId, id, title, body} = randomPost;
  expect(userId).toBeTruthy();
  expect(id).toBeTruthy();
  //Check empty
  expect(title).toBeTruthy();
  expect(body).toBeTruthy();

  console.log(randomIndex);
});