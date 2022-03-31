import * as types from '../actionsTypes/post.actionTypes';

const initialState = {
  loading: false,
  post: {},
  error: false,
};

export default function postReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.REQUEST_FETCH_POST:
      return { ...state, loading: true };
    case types.REQUEST_FETCH_POST_SUCCESS:
      return { ...state, loading: false, post: payload };
    case types.REQUEST_FETCH_POST_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
