import * as types from '../actionsTypes/posts.actionTypes';
import * as postTypes from '../actionsTypes/post.actionTypes';

const initialState = {
  posts: [],
  loading: false,
  error: false,
}

export default function postsReducer(state = initialState, action) {
  const { type, payload = {} } = action;

  switch (type) {
    case types.REQUEST_FETCH_POSTS:
    case postTypes.CREATE_POST_BEGIN:
    case postTypes.EDIT_POST_BEGIN:
      return { ...state, loading: true };

    case types.REQUEST_FETCH_SUCCESS:
      return { ...state, loading: false, posts: payload };

    case types.REQUEST_FETCH_FAILURE:
    case postTypes.CREATE_POST_FAILURE:
    case postTypes.EDIT_POST_FAILURE:
      return { ...state, loading: false, error: true };
    
    case postTypes.DELETE_POST_SUCCESS:
      const updatedPosts = state.posts.filter((p) => p.id !== Number(payload))

      return { ...state, posts: [...updatedPosts] };
    case postTypes.DELETE_POST_FAILURE:
      return {...state, loading: false, error: true};

    case postTypes.CREATE_POST_SUCCESS:
      const newPosts = new Set([{...payload}, ...state.posts]);
      return { ...state, loading: false, posts: [...newPosts]};
  
    case postTypes.EDIT_POST_SUCCESS:
      const modifiedPost = state.posts.map((p) => {
        if (p.id === Number(payload.postId)) {
          return {
            ...payload.updatedPost,
          }
        } else return p;
      })

      return { ...state, loading: false, posts: modifiedPost };
    default:
      return state;
  }
}
