import React  from 'react';
import Loading from 'react-loading-components';
import Loadable from 'react-loadable';

const LoadableComponent = (url) => Loadable({
  loader: () => import('' + url),
  loading() {
    return <Loading type='ball_triangle' width={100} height={100} fill='#f44242' />
  }
});


const routes = [
  {
    'path': '/',
    'component': LoadableComponent('./App.jsx'),
    'exact': true,
    'isRequireAuthenticated': false
  },
  {
    'path': '/library',
    'component': LoadableComponent('./containers/MediaGalleryPage.jsx'),
    'isRequireAuthenticated': true
  },
  {
    'path': '/todo',
    'component': LoadableComponent('./components/Todo.jsx'),
    'isRequireAuthenticated': true
  },
  {
    'path': '/auth/login',
    'component': LoadableComponent('./containers/LoginContainer.jsx'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/auth/sign-up',
    'component': LoadableComponent('./containers/SignUpContainer.jsx'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/auth/logout',
    'component': LoadableComponent('./containers/Logout.jsx'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/instagram/owner',
    'component': LoadableComponent('./containers/InstagramUserProfileContainer.jsx'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/instagram/app',
    'component': LoadableComponent('./containers/InstagramApp.jsx'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/study/react-context',
    'component': LoadableComponent('./context/ProfileProvider.jsx'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/hocs/example',
    'component': LoadableComponent('./hocs/DisplayListHOC.jsx'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/posts/new',
    'component': LoadableComponent('./containers/PostsContainer.jsx'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/context-example/header',
    'component': LoadableComponent('./context/LanguageProvider.jsx'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/context-example/modal',
    'component': LoadableComponent('./context/ContextModal.jsx'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/example/skype-chat',
    'component': LoadableComponent('./modules/SkypeChat'),
    'isRequireAuthenticated': false
  },
];

export default routes;
