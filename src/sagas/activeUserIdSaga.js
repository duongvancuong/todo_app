import { put } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* setActiveUserId({ payload }) {
  try {
    yield [
      put({ type: types.SET_ACTION_ID_SUCC, payload })
    ];
  } catch (error) {
    yield put({ type: types.GET_ACTION_ID_FAIL, error });
  }
}
