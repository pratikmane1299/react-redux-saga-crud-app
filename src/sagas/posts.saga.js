import { takeLatest, call, put } from 'redux-saga/effects';

import * as postsActionTypes from '../actionsTypes/posts.actionTypes';
import { fetchPostsFailure, fetchPostsSuccess } from '../actions/posts.actions';
import { fetchPostsApi } from '../api';

function *fetchPostsSaga() {
  try {
    const posts = yield call(fetchPostsApi);
    yield put(fetchPostsSuccess(posts))
  } catch (error) {
    yield put(fetchPostsFailure());
  }
}

function *postsWatcherSaga() {
  yield takeLatest(postsActionTypes.REQUEST_FETCH_POSTS, fetchPostsSaga);
}

export default postsWatcherSaga;
