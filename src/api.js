import axios from "axios";

export function fetchPostsApi() {
  return axios
    .get("http://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
}

export function fetchPostApi(postId) {
  return axios
    .get("http://jsonplaceholder.typicode.com/posts/"+postId)
    .then((res) => res.data);
}

export function fetchComments(postId) {
  return axios
    .get(`http://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((res) => res.data);
}

export function fetchUserApi(userId) {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/`)
    .then(res => res.data);
}

export function deletePostApi(postId) {
  return axios.delete(`http://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) => res.data);
}

export function createPostApi(newPost) {
  return axios.post(`http://jsonplaceholder.typicode.com/posts`, newPost)
    .then((res) => res.data);
}

export function editPostApi(postId, post) {
  return axios.patch(`http://jsonplaceholder.typicode.com/posts/${postId}`, post)
    .then((res) => res.data);
}
