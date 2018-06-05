import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import todos from './todos';
import visibilityFilter from './visibilityFilter'
import images from './imageReducer';
import videos from './videoReducer';
import auth from './authReducer';
import instagramUser from './instagramUser';
import postReducer from './postReducer';
import contactReducer from './contactReducer';
import userSkypeReducer from './userSkypeReducer';
import activeUserIdReducer from './activeUserIdReducer';
import messageReducer from './messageReducer';
import typingReducer from './typingReducer';

export default combineReducers({
  todos,
  visibilityFilter,
  images,
  videos,
  auth,
  instagramUser,
  postReducer,
  form: formReducer,
  contacts: contactReducer,
  user: userSkypeReducer,
  activeUserId: activeUserIdReducer,
  messages: messageReducer,
  typing: typingReducer,
});
