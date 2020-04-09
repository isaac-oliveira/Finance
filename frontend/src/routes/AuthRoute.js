import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import AppRoute from './AppRoute';

export default function AuthRoute() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/app" component={AppRoute} />
      <Route path="*">
        <p>Not Found</p>
      </Route>
    </Switch>
  );
}
