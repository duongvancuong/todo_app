
import * as types from '../constants/actionTypes';
import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case types.GET_MSG_SUCC:
      return { ...state, ...action.messages }
    case types.SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const number = +_.keys(allUserMsgs).pop() + 1;
      return { ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      };
    default:
      return state;
  }
}
