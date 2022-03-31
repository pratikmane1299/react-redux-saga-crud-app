import { all, fork } from "redux-saga/effects";

import postsSaga from "./posts.saga";
import postSaga from './post.saga';

export default function *rootSaga(params) {
  yield all([
    fork(postsSaga),
    fork(postSaga),
  ]);
}
