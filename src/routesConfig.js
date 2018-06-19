import React  from 'react';
import Loadable from 'react-loadable';

import LoadingSpinner from './components/LoadingSpinner';

const LoadableComponent = (url) => Loadable({
  loader: () => import('' + url),
  loading: LoadingComp,
  delay: 300
});

const LoadingComp = (props) => {
  if (props.error) {
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else {
    return <LoadingSpinner />;
  }
}


const routes = [
  {
    'path': '/',
    'component': LoadableComponent('./App'),
    'exact': true,
    'isRequireAuthenticated': false
  },
  {
    'path': '/library',
    'component': LoadableComponent('./modules/MediaGalleryPage'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/todo',
    'component': LoadableComponent('./modules/TodoApp'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/auth/login',
    'component': LoadableComponent('./modules/LogIn'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/auth/sign-up',
    'component': LoadableComponent('./modules/SignUp'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/auth/logout',
    'component': LoadableComponent('./modules/Logout'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/instagram/owner',
    'component': LoadableComponent('./modules/InstagramUserProfile'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/study/react-context',
    'component': LoadableComponent('./context/ProfileProvider'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/hocs/example',
    'component': LoadableComponent('./hocs/DisplayListHOC'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/posts/new',
    'component': LoadableComponent('./containers/PostsContainer'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/context-example/header',
    'component': LoadableComponent('./context/LanguageProvider'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/context-example/modal',
    'component': LoadableComponent('./context/ContextModal'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/example/skype-chat',
    'component': LoadableComponent('./modules/SkypeChat'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/example/mixing-components',
    'component': LoadableComponent('./modules/MixingComponent'),
    'isRequireAuthenticated': false
  },
];

export default routes;
