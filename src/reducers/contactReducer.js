import * as types from '../constants/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case types.GET_CONTACTS_SUCC:
      return { ...state, ...action.contacts };
    case types.GET_CONTACTS_FAIL:
      return { ...state }
    default:
      return state;
  }
}
