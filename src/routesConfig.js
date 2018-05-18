import App from './App';
import MediaGalleryPage from './containers/MediaGalleryPage';
import AppTodo from './components/AppTodo';
import LoginContainer from './containers/LoginContainer';
import SignUpContainer from './containers/SignUpContainer';
import Logout from './containers/Logout';
import InstagramUserProfileContainer from './containers/InstagramUserProfileContainer';
import ProfileUserConext from './context/ProfileProvider';
import renderDisplay from './hocs/DisplayListHOC';
import InstagramApp from './containers/InstagramApp';
import PostContainer from './containers/PostsContainer';
const routes = [
  {
    'path': '/',
    'component': App,
    'exact': true,
    'isRequireAuthenticated': false
  },
  {
    'path': '/library',
    'component': MediaGalleryPage,
    'isRequireAuthenticated': true
  },
  {
    'path': '/todo',
    'component': AppTodo,
    'isRequireAuthenticated': true
  },
  {
    'path': '/auth/login',
    'component': LoginContainer,
    'isRequireAuthenticated': false
  },
  {
    'path': '/auth/sign-up',
    'component': SignUpContainer,
    'isRequireAuthenticated': false
  },
  {
    'path': '/auth/logout',
    'component': Logout,
    'isRequireAuthenticated': false
  },
  {
    'path': '/instagram/owner',
    'component': InstagramUserProfileContainer,
    'isRequireAuthenticated': false
  },
  {
    'path': '/instagram/app',
    'component': InstagramApp,
    'isRequireAuthenticated': false
  },
  {
    'path': '/study/react-context',
    'component': ProfileUserConext,
    'isRequireAuthenticated': false
  },
  {
    'path': '/hocs/example',
    'component': renderDisplay,
    'isRequireAuthenticated': false
  },
  {
    'path': '/posts/new',
    'component': PostContainer,
    'isRequireAuthenticated': false
  }
];

export default routes;
