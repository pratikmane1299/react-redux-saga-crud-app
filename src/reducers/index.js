import { combineReducers } from "redux";

function indexReducer(state = 'helloworld', action) {
  return state;
}

const reducers = combineReducers({
  index: indexReducer,
});

export default reducers;
