import { put, call } from 'redux-saga/effects';
import { login, register } from '../services/user';
import * as types from '../constants/actionTypes';

const auth = (data) =>({
  isAuthenticated: true,
  token: data.token.token,
  refresh_token: data.token.refresh_token,
  expired_at: data.token.expired_at,
});

export function* loginUser(data) {
  try {
    const auth_token = yield call(login, data.data);
    const payload = auth(auth_token);
    yield [
      put({type: types.AUTHENTICATED, payload}),
    ];
  } catch (error) {
    yield put({type: types.AUTHENTICATE_ERROR, error});
  }
};

export function* registerUser(data) {
  try {
    const auth_token = yield call(register, data.data);
    const payload = auth(auth_token);
    yield [
      put({type: types.REGISTER_SUCCESS, payload}),
    ];
  } catch (error) {
    yield put({type: types.REGISTER_ERROR, error});
  }
};
