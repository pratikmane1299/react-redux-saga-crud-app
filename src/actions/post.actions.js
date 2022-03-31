import * as types from '../actionsTypes/post.actionTypes';

export function requestFetchPost(postId) {
  return { type: types.REQUEST_FETCH_POST, postId };
}

export function fetchPostSuccess(post) {
  return { type: types.REQUEST_FETCH_POST_SUCCESS, payload: post };
}

export function fetchPostFailure() {
  return { type: types.REQUEST_FETCH_POST_FAILURE, payload: {} };
}

export function deletePostBegin(postId) {
  return { type: types.DELETE_POST_BEGIN, postId };
}

export function deletePostSuccess(postId) {
  return { type: types.DELETE_POST_SUCCESS, payload: postId };
}

export function deletePostFailure() {
  return { type: types.DELETE_POST_FAILURE, payload: {} };
}

export function createPostBegin(newPost) {
  return { type: types.CREATE_POST_BEGIN, newPost };
}

export function createPostSuccess(post) {
  return { type: types.CREATE_POST_SUCCESS, payload: post };
}

export function createPostFailure() {
  return { type: types.CREATE_POST_FAILURE, payload: {} };
}

export function editPostBegin(postId, post) {
  return { type: types.EDIT_POST_BEGIN, payload: {post, postId} };
}

export function editPostSuccess(postId, updatedPost) {
  return { type: types.EDIT_POST_SUCCESS, payload: {postId, updatedPost} };
}

export function editPostFailure() {
  return { type: types.EDIT_POST_FAILURE, payload: {} };
}
