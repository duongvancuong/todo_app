import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import images from './imageReducer';
import videos from './videoReducer';
import auth from './authReducer';
import instagramUser from './instagramUser';

export default combineReducers({
  todos,
  visibilityFilter,
  images,
  videos,
  auth,
  instagramUser
});
