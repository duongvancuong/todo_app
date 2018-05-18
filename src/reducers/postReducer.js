import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.categories, action) {
  switch (action.type) {
    case types.GET_CATEGORIES_SUCC:
      return { ...state, ...action.payload };
    case types.GET_CATEGORIES_FAIL:
      return { ...state, errors: {error_code: action.error_code} }
    default:
      return state;
  }
}
