import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { getMessages } from '../mockup/static-data';
// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* getMessagesAction() {
  try {
    const messages = yield call(getMessages, 10);
    yield [
      put({ type: types.GET_MSG_SUCC, messages })
    ];
  } catch (error) {
    yield put({ type: types.GET_ACTION_ID_FAIL, error });
  }
}
