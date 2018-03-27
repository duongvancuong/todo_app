import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.auth_token, action) {
  switch (action.type) {
    case types.AUTHENTICATED:
      return {...state, auth_token: action.auth_token};
    default:
      return state;
  }
}
