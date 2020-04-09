import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import History from '../pages/History';
import Transfer from '../pages/Transfer';
import Deposit from '../pages/Deposit';
import Withdraw from '../pages/Withdraw';

export default function AppRoute() {
  return (
    <Switch>
      <Route path="/home" exact>
        <Redirect to="/home/history" />
      </Route>
      <Route path="/home/history" component={History} />
      <Route path="/home/transfer" component={Transfer} />
      <Route path="/home/deposit" component={Deposit} />
      <Route path="/home/withdraw" component={Withdraw} />
    </Switch>
  );
}
