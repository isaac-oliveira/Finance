import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Splash from '../pages/Splash';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';

export default function AuthRoute() {
  return (
    <Switch>
      <Route path="/" exact component={Splash} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/home" component={Home} />
      <Route path="*">
        <p>Not Found</p>
      </Route>
    </Switch>
  );
}
