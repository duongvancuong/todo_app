import React from 'react';
import { Route, Switch } from 'react-router-dom'
import App from './App';
import HomePage from './components/HomePage';
import MediaGalleryPage from './containers/MediaGalleryPage';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path='/todo' component={App} />
    <Route path="/library" component={MediaGalleryPage} />
  </Switch>
);
