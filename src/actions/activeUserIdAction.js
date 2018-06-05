import {
  SET_ACTION_ID,
  } from '../constants/actionTypes';

export const setActiveUserId = id => ({
  type: SET_ACTION_ID,
  payload: id
});
