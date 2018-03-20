import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import images from './imageReducer';
import videos from './videoReducer';

export default combineReducers({
  todos,
  visibilityFilter,
  images,
  videos
});
