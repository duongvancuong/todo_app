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
    'name': 'Home',
    'path': '/',
    'component': LoadableComponent('./modules/App'),
    'exact': true,
    'isRequireAuthenticated': false
  },
  {
    'name': 'Library',
    'path': '/library',
    'component': LoadableComponent('./modules/MediaGalleryPage'),
    'isRequireAuthenticated': false
  },
  {
    'name': 'Todo',
    'path': '/todo',
    'component': LoadableComponent('./modules/TodoApp'),
    'isRequireAuthenticated': false
  },
  {
    'name': 'Login',
    'path': '/auth/login',
    'component': LoadableComponent('./modules/LogIn'),
    'isRequireAuthenticated': false
  },
  {
    'name': 'Sign Up',
    'path': '/auth/sign-up',
    'component': LoadableComponent('./modules/SignUp'),
    'isRequireAuthenticated': false
  },
  {
    'name': 'Logout',
    'path': '/auth/logout',
    'component': LoadableComponent('./modules/Logout'),
    'isRequireAuthenticated': false
  },
  {
    'name': 'Instagram Owner',
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
    'name': 'Hocs Example',
    'path': '/hocs/example',
    'component': LoadableComponent('./hocs/DisplayListHOC'),
    'isRequireAuthenticated': false
  },
  {
    'name': 'Post New',
    'path': '/posts/new',
    'component': LoadableComponent('./containers/PostsContainer'),
    'isRequireAuthenticated': false
  },
  {
    'name': 'Context example header',
    'path': '/context-example/header',
    'component': LoadableComponent('./context/LanguageProvider'),
    'isRequireAuthenticated': false
  },
  {
    'name': 'Context example Modal',
    'path': '/context-example/modal',
    'component': LoadableComponent('./context/ContextModal'),
    'isRequireAuthenticated': false
  },
  {
    'name': 'Skype Chat',
    'path': '/example/skype-chat',
    'component': LoadableComponent('./modules/SkypeChat'),
    'isRequireAuthenticated': false
  },
  {
    'name': 'Mixing Components',
    'path': '/example/mixing-components',
    'component': LoadableComponent('./modules/MixingComponent'),
    'isRequireAuthenticated': false
  },
];

export default routes;
