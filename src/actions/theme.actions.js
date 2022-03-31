import * as types from '../actionsTypes/theme.actionTypes';

export function setTheme(theme) {
  return {
    type: types.SET_THEME,
    payload: theme,
  };
}
