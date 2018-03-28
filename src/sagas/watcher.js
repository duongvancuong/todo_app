import { takeLatest } from 'redux-saga/effects';
import { searchMediaSaga } from './mediaSaga';
import { loginUser, registerUser } from './userSaga';
import * as types from '../constants/actionTypes';

// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
export default function* root() {
  yield takeLatest(types.SEARCH_MEDIA_REQUEST, searchMediaSaga);
  yield takeLatest(types.REQ_LOGIN_ACTION, loginUser);
  yield takeLatest(types.REQ_REGISTER_USER, registerUser);
}
