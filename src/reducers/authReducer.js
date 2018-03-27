import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.auth, action) {
  switch (action.type) {
    case types.AUTHENTICATED:
      return {...state, ...action.payload };
    default:
      return state;
  }
}
