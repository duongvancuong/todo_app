import * as types from '../constants/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case types.GET_USER_SUCC:
      return { ...state, ...action.userSkype };
    case types.GET_USER_FAIL:
      return { ...state }
    default:
      return state;
  }
}
