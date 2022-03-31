import * as types from '../actionsTypes/posts.actionTypes';

export function requestFetchAllPosts() {
  return { type: types.REQUEST_FETCH_POSTS, payload: {} };
}

export function fetchPostsSuccess(posts) {
  return { type: types.REQUEST_FETCH_SUCCESS, payload: posts };
}

export function fetchPostsFailure() {
  return { type: types.REQUEST_FETCH_FAILURE, payload: {} };
}
