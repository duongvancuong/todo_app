import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from './routesConfig';
import PrivateRoute from './PrivateRoute';

export default (
  <Switch>
    {
      routes.map((route, index) => (
        route.isRequireAuthenticated
        ?
        <PrivateRoute exact={route.exact} key={index} path={route.path} component={route.component} />
        :
        <Route key={index} path={route.path} component={route.component} exact={route.exact} />
      ))
    }
    <Redirect to="/" />
  </Switch>
);
