import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import todos from './todos';
import visibilityFilter from './visibilityFilter'
import images from './imageReducer';
import videos from './videoReducer';
import auth from './authReducer';
import instagramUser from './instagramUser';
import postReducer from './postReducer';

export default combineReducers({
  todos,
  visibilityFilter,
  images,
  videos,
  auth,
  instagramUser,
  postReducer,
  form: formReducer,
});
