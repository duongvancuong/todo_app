import React  from 'react';
import Loading from 'react-loading-components';
import Loadable from 'react-loadable';

const LoadableComponent = (url) => Loadable({
  loader: () => import('' + url),
  loading: LoadingComp,
  delay: 300
});

const LoadingComp = (props) => {
  if (props.error) {
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else {
    return <Loading type='ball_triangle' width={100} height={100} fill='#f44242' />;
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
    'component': LoadableComponent('./containers/MediaGalleryPage'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/todo',
    'component': LoadableComponent('./components/Todo'),
    'isRequireAuthenticated': true
  },
  {
    'path': '/auth/login',
    'component': LoadableComponent('./containers/LoginContainer'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/auth/sign-up',
    'component': LoadableComponent('./containers/SignUpContainer'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/auth/logout',
    'component': LoadableComponent('./containers/Logout'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/instagram/owner',
    'component': LoadableComponent('./containers/InstagramUserProfileContainer'),
    'isRequireAuthenticated': false
  },
  {
    'path': '/instagram/app',
    'component': LoadableComponent('./containers/InstagramApp'),
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
];

export default routes;
