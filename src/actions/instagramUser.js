import {
  GET_INFO_INSTAGRAM_USER,
  GET_INFO_INSTAGRAM_USER_SUCCESS,
  GET_INFO_INSTAGRAM_USER_ERROR
  } from '../constants/actionTypes';

export const getUserProfile = () => ({
  type: GET_INFO_INSTAGRAM_USER,
});

export const getUserProfileSuccess = (payload) => ({
  type: GET_INFO_INSTAGRAM_USER_SUCCESS,
  payload
});


export const getUserProfileError = (payload) => ({
  type: GET_INFO_INSTAGRAM_USER_ERROR,
  payload
});
