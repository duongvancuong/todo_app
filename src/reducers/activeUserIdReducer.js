import * as types from '../constants/actionTypes';

export default function (state = null, action) {
  switch (action.type) {
    case types.SET_ACTION_ID:
      return action.payload
    default:
      return state;
  }
}
