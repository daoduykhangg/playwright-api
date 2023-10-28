import { test, expect } from "@playwright/test";
import dotenv from 'dotenv';
import path from 'path';

test('Should be able to perform CRUD on post type', async({ request }) => {

  const headers = {
    'Content-type': 'application/json; charset=UTF-8'
  }
  const createBody = {
    title: "foo",
    body: "bar",
    userId: "1"
  }  
  const updateBody = {
    title: "foo",
    body: "bar",
    userId: "1"
  }
  const createOptions = {
    Headers: headers,
    data: createBody
  }
  const updateOptions = {
    Headers: headers,
    data: updateBody
  }
  dotenv.config();
  const url = process.env.BASE_URL;
  console.log (url);

  // Create new a post
  const resPost = await request.post(url + ('/posts'), createOptions);
  const postJson = await resPost.json();
  let id =  Number(postJson.id) - 1;

  // Reuse postId to get a post
  const resGet = await request.get(`${url}/posts/${id}`);
  expect(resGet.status()).toBe(200);
  const getJson = await resGet.json();
  console.log(getJson);


  // Reuse postId to update a post
  const resPut = await request.put(`${url}/posts/${id}`, updateOptions);
  expect(resPut.status()).toBe(200);
  const putJson = await resPut.json();
  console.log(getJson);

  // Reuse postId to delete a post
  const resDelete = await request.delete(`${url}/posts/${id}`);
  expect(resDelete.status()).toBe(200);

})