import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.auth, action) {
  switch (action.type) {
    case types.AUTHENTICATED:
      return {...state, ...action.payload };
    case types.REGISTER_SUCCESS:
      return {...state, ...action.payload};
    case types.LOGOUT_SUCCESS:
      return { ...action.auth_logout};
    default:
      return state;
  }
}
