import { combineReducers } from "redux";

import postsReducer from "./posts.reducer";
import postReducer from "./post.reducer";
import themeReducer from "./theme.reducer";

function indexReducer(state = 'helloworld', action) {
  return state;
}

const reducers = combineReducers({
  index: indexReducer,
  postsReducer,
  postReducer,
  themeReducer,
});

export default reducers;
