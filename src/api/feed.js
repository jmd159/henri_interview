const axios = require("axios");
export async function getFeedItems() {
  const path = "https://jsonplaceholder.typicode.com/posts";
  let response;

  try {
    response = await axios.get(path);
  } catch (error) {
    response = error;
  }
  return response;
}

export async function getUserFeedItems(userId) {
  const path = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
  let response;

  try {
    response = await axios.get(path);
  } catch (error) {
    response = error;
  }
  return response;
}

export async function getFeedComments(id) {
  const path = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
  let response;

  try {
    response = await axios.get(path);
  } catch (error) {
    response = error;
  }
  return response;
}

export async function deleteFeedItem(id) {
  const path = `https://jsonplaceholder.typicode.com/posts/${id}`;
  let response;

  try {
    response = await axios.delete(path, { method: "DELETE" });
  } catch (error) {
    response = error;
  }
  return response;
}

export async function uploadFeedItem(params) {
  const path = `https://jsonplaceholder.typicode.com/posts`;
  let response;

  try {
    response = await axios.post(path, {
      method: "POST",
      body: { params },
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  } catch (error) {
    response = error;
  }
  return response;
}
