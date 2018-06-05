import { takeLatest } from 'redux-saga/effects';
import { searchMediaSaga } from './mediaSaga';
import { loginUser, registerUser, logoutUser } from './userSaga';
import { getInstgramUserSaga } from './instagramUserSaga';
import { getCategoriesSaga } from './postSaga';
import { getContacts } from './contactSaga';
import { getUser } from './userSkypeSaga';
import { setActiveUserId } from './activeUserIdSaga';
import { getMessagesAction } from './messageSaga';
import { setTypingMessage } from './typingSaga';
import * as types from '../constants/actionTypes';

// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
export default function* root() {
  yield [
    takeLatest(types.SEARCH_MEDIA_REQUEST, searchMediaSaga),
    takeLatest(types.REQ_REGISTER_USER, registerUser),
    takeLatest(types.REQ_LOGIN_ACTION, loginUser),
    takeLatest(types.GET_INFO_INSTAGRAM_USER, getInstgramUserSaga),
    takeLatest(types.REQ_LOGOUT_USER, logoutUser),
    takeLatest(types.REQ_CONTACTS, getContacts),
    takeLatest(types.GET_CATEGORIES_REQ, getCategoriesSaga),
    takeLatest(types.SET_ACTION_ID, setActiveUserId),
    takeLatest(types.REQ_USER, getUser),
    takeLatest(types.SET_TYPING_VALUE, setTypingMessage),
    takeLatest(types.REQ_MSG, getMessagesAction),
  ]
}
