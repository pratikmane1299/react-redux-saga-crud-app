import { takeLatest, put } from 'redux-saga/effects';

import * as postActionTypes from '../actionsTypes/post.actionTypes';
import { fetchPostFailure, fetchPostSuccess, deletePostSuccess, deletePostFailure, createPostSuccess, createPostFailure, editPostSuccess, editPostFailure, requestFetchPost } from '../actions/post.actions';
import { fetchPostApi, fetchComments, fetchUserApi, deletePostApi, createPostApi, editPostApi } from '../api';

function *fetchPostSaga({postId}) {
  try {
    const post = yield fetchPostApi(postId);
    const comments = yield fetchComments(postId);
    const author = yield fetchUserApi(post.userId);
    yield put(fetchPostSuccess({...post, author, comments}));
  } catch (error) {
    yield put(fetchPostFailure());
  }
}

function *deletePostSaga({ postId }) {
  try {
    const post = yield deletePostApi(postId)
    yield put(deletePostSuccess(postId));
  } catch (error) {
    yield put(deletePostFailure());
  }
}

function *createPostSaga({ newPost }) {
  try {
    const post = yield createPostApi(newPost);
    yield put(createPostSuccess(post));
  } catch (error) {
    yield put(createPostFailure());
  }
}

function *editPostSaga({ payload }) {
  try {
    const updatedPost = yield editPostApi(payload.postId, payload.post);
    yield put(editPostSuccess(payload.postId, updatedPost));
    yield put(requestFetchPost(payload.postId));
  } catch (error) {
    yield put(editPostFailure());
  }
}

function *postWatcherSaga() {
  yield takeLatest(postActionTypes.REQUEST_FETCH_POST, fetchPostSaga);
  yield takeLatest(postActionTypes.DELETE_POST_BEGIN, deletePostSaga);
  yield takeLatest(postActionTypes.CREATE_POST_BEGIN, createPostSaga);
  yield takeLatest(postActionTypes.EDIT_POST_BEGIN, editPostSaga);
}

export default postWatcherSaga;
