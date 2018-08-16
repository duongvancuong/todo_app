import { createActions, handleActions, combineActions } from 'redux-actions';

import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default handleActions(
  {
    SHUTTER_VIDEOS_SUCCESS: (state, action) => {
      return [...state, action.payload.videos]
    },

    SELECTED_VIDEO: (state, action) => ({
      ...state, selectedVideo: action.payload.video
    }),
  },
  { images: [] }
);
