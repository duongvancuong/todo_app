import App from './App';
import MediaGalleryPage from './containers/MediaGalleryPage';
import AppTodo from './components/AppTodo'
import LoginContainer from './containers/LoginContainer';

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
  }
];

export default routes;
