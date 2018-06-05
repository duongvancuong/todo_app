import {
  SET_TYPING_VALUE,
  SEND_MESSAGE,
  } from '../constants/actionTypes';

export const setTypingValue = (value) => ({
  type: SET_TYPING_VALUE,
  payload: value
});

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId
  }
})
