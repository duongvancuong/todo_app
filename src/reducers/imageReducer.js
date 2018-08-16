import { createActions, handleActions, combineActions } from 'redux-actions';

import initialState from './initialState';
import * as types from '../constants/actionTypes';


export default handleActions(
  {
    FLICKR_IMAGES_SUCCESS: (state, action) => {
      return [...state, action.payload.images]
    },

    SELECTED_IMAGE: (state, action) => ({
      ...state, selectedImage: action.payload.image
    }),
  },
  { images: [] }
);
