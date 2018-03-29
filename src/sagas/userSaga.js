import { put, call } from 'redux-saga/effects';
import { login, register, logout } from '../services/user';
import * as types from '../constants/actionTypes';

const auth_login = (data) =>({
  isAuthenticated: true,
  token: data.token.token,
  refresh_token: data.token.refresh_token,
  expired_at: data.token.expired_at,
});

const auth_register = (data) =>({
  isAuthenticated: true,
  token: data.auth_token.token,
  refresh_token: data.auth_token.refresh_token,
  expired_at: data.auth_token.expired_at,
});

export function* loginUser(data) {
  try {
    const auth_token = yield call(login, data.data);
    const payload = auth_login(auth_token);
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
    const payload = auth_register(auth_token);
    yield [
      put({type: types.REGISTER_SUCCESS, payload}),
    ];
  } catch (error) {
    yield put({type: types.REGISTER_ERROR, error});
  }
};

export function* logoutUser({token}) {
  try {
    const auth_token = yield call(logout, token);
    yield [
      put({type: types.LOGOUT_SUCCESS, auth_token}),
    ];
  } catch (error) {
    yield put({type: types.LOGOUT_ERROR, error});
  }
};
