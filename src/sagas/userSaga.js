import { put, call } from 'redux-saga/effects';
import { login } from '../services/user';
import * as types from '../constants/actionTypes';

export function* loginUser(data) {
  try {
    const auth_token = yield call(login, data.data);
    const payload = {
      isAuthenticated: true,
      token: auth_token.token.token,
      refresh_token: auth_token.token.refresh_token,
      expired_at: auth_token.token.expired_at,
    }
    yield [
      put({type: types.AUTHENTICATED, payload}),
    ];
  } catch (error) {
    yield put({type: types.AUTHENTICATE_ERROR, error});
  }
}
