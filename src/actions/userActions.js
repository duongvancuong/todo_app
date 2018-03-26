import { REQ_LOGIN_ACTION, LOGIN_ACT_SUCCESS, LOGIN_ACT_ERROR} from '../constants/actionTypes';

export const requestLoginAction = (data) => ({
  type: REQ_LOGIN_ACTION,
  data
});
