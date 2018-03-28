import { REQ_LOGIN_ACTION, REQ_REGISTER_USER } from '../constants/actionTypes';

export const requestLoginAction = (data) => ({
  type: REQ_LOGIN_ACTION,
  data
});

export const requestRegisterAction = (data) => ({
  type: REQ_REGISTER_USER,
  data
});
