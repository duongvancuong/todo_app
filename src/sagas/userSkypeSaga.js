import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { generateUser } from '../mockup/static-data';

// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* getUser() {
  try {
    const userSkype = yield call(generateUser);
    yield [
      put({ type: types.GET_USER_SUCC, userSkype })
    ];
  } catch (error) {
    yield put({ type: types.GET_USER_FAIL, error });
  }
}
