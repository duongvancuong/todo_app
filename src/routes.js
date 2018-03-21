import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import App from './App';
import MediaGalleryPage from './containers/MediaGalleryPage';
import AppTodo from './components/AppTodo'
import HomePage from './components/HomePage'

export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/library" component={MediaGalleryPage} />
    <Route path="/todo" component={AppTodo} />
    <Route path="/test" component={HomePage} />
    <Redirect to="/" />
  </Switch>
);
