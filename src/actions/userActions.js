import {
  REQ_LOGIN_ACTION,
  REQ_REGISTER_USER,
  REQ_LOGOUT_USER
} from '../constants/actionTypes';

export const requestLoginAction = (data) => ({
  type: REQ_LOGIN_ACTION,
  data
});

export const requestRegisterAction = (data) => ({
  type: REQ_REGISTER_USER,
  data
});

export const requestLogoutAction = (token) => ({
  type: REQ_LOGOUT_USER,
  token
});
