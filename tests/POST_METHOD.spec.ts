import { test, expect} from "@playwright/test";

test('should be able to create a new post', async ({request}) => {
  //Construct the data
  const url = "https://jsonplaceholder.typicode.com/posts";
  const postContent = {
    title: "foo",
    body: "bar",
    userId: "1"
  }
  
  const options = {
    Headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    data: postContent
  }
  
  //Send a POST method
  const response = await request.post(url, options);

  //Verification
  expect(response.status()).toBe(201);

  const resBody = await response.json();
  const {title, body, userId, id} = resBody;

  expect(title).toBe(postContent.title);
  expect(body).toBe(postContent.body);
  expect(userId).toBe(postContent.userId);
  expect(id).toBeTruthy();
})