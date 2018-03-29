import App from './App';
import MediaGalleryPage from './containers/MediaGalleryPage';
import AppTodo from './components/AppTodo'
import LoginContainer from './containers/LoginContainer';
import SignUpContainer from './containers/SignUpContainer';

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
  }
];

export default routes;
