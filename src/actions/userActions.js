import { REQ_LOGIN_ACTION } from '../constants/actionTypes';

export const requestLoginAction = (data) => ({
  type: REQ_LOGIN_ACTION,
  data
});
