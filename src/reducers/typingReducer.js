import * as types from '../constants/actionTypes';

export default function (state = "", action) {
  switch (action.type) {
    case types.SET_TYPING_VALUE_SUCC:
      return action.payload;
    case types.SEND_MESSAGE:
      return "";
    default:
      return state;
  }
}
