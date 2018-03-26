import { put, call } from 'redux-saga/effects';
import { login } from '../services/user';
import * as types from '../constants/actionTypes';

export function* loginUser(data) {
  try {
    const auth_token = yield call(login, data.data);
    yield [
      put({type: types.AUTHENTICATED, auth_token}),
    ];
  } catch (error) {
    yield put({type: types.AUTHENTICATE_ERROR, error});
  }
}
