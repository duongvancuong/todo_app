import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.instagramUser, action) {
  switch (action.type) {
    case types.GET_INFO_INSTAGRAM_USER_SUCCESS:
      return { ...state, ...action.payload };
    case types.GET_INFO_INSTAGRAM_USER_ERROR:
      return { ...state, errors: {error_code: action.error_code.message} }
    default:
      return state;
  }
}
