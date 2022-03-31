import * as types from '../actionsTypes/theme.actionTypes';

const initialState = {
  theme: 'light',
};

export default function themReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.SET_THEME:
      localStorage.setItem('APP_THEME', payload);
      return { ...state, theme: payload };

    default:
      return state;
  }
}
