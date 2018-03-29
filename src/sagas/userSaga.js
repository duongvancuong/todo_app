import { put, call, select } from 'redux-saga/effects';
import { login, register, logout } from '../services/user';
import * as types from '../constants/actionTypes';

const auth_login = (token) =>({
  isAuthenticated: true,
  token: token.token,
  refresh_token: token.refresh_token,
  expired_at: token.expired_at,
  errors: {},
});

const auth_register = (data) =>({
  isAuthenticated: true,
  token: data.auth_token.token,
  refresh_token: data.auth_token.refresh_token,
  expired_at: data.auth_token.expired_at,
  errors: {},
});

const auth_logout = {
  isAuthenticated: false,
  errors: {},
}

export function* loginUser(data) {
  try {
    const { token, error_code } = yield call(login, data.data);
    if (error_code) {
      throw new Error(error_code);
    }
    const payload = auth_login(token);
    yield [
      put({type: types.AUTHENTICATED, payload}),
    ];
  } catch (error_code) {
    yield put({type: types.AUTHENTICATE_ERROR, error_code });
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

export function* logoutUser() {
  try {
    const token = yield select(getToken)
    yield call(logout, token);
    yield [
      put({type: types.LOGOUT_SUCCESS, auth_logout}),
    ];
  } catch (error) {
    yield put({type: types.LOGOUT_ERROR, error});
  }
};

const getToken = (state) => state.auth.token
