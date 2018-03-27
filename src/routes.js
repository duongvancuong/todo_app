import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from './routesConfig';

export default (
  <Switch>
    {
      routes.map((route, index) => (
        <Route key={index} path={route.path} component={route.component} exact={route.exact} />
      ))
    }
    <Redirect to="/" />
  </Switch>
);
