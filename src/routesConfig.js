import App from './App';
import MediaGalleryPage from './containers/MediaGalleryPage';
import AppTodo from './components/AppTodo'
import HomePage from './components/HomePage'

const routes = [
  {
    'path': '/',
    'component': App,
    'exact': true
  },
  {
    'path': '/library',
    'component': MediaGalleryPage
  },
  {
    'path': '/todo',
    'component': AppTodo
  },
  {
    'path': '/test',
    'component': HomePage
  }
];

export default routes;
