import { takeLatest } from 'redux-saga/effects';
import { searchMediaSaga } from './mediaSaga';
import { loginUser, registerUser, logoutUser } from './userSaga';
import { getInstgramUserSaga } from './instagramUserSaga';
import { getCategoriesSaga } from './postSaga';
import * as types from '../constants/actionTypes';

// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
export default function* root() {
  yield takeLatest(types.SEARCH_MEDIA_REQUEST, searchMediaSaga);
  yield takeLatest(types.REQ_LOGIN_ACTION, loginUser);
  yield takeLatest(types.REQ_REGISTER_USER, registerUser);
  yield takeLatest(types.REQ_LOGOUT_USER, logoutUser);
  yield takeLatest(types.GET_INFO_INSTAGRAM_USER, getInstgramUserSaga);
  yield takeLatest(types.GET_CATEGORIES_REQ, getCategoriesSaga);
}
