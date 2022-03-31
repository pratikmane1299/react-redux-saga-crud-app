import { combineReducers } from "redux";

import postsReducer from "./posts.reducer";
import postReducer from "./post.reducer";

function indexReducer(state = 'helloworld', action) {
  return state;
}

const reducers = combineReducers({
  index: indexReducer,
  postsReducer,
  postReducer,
});

export default reducers;
