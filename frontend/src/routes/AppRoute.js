import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import History from '../pages/History';
import Transfer from '../pages/Transfer';
import Deposit from '../pages/Deposit';
import Withdraw from '../pages/Withdraw';

export default function AppRoute() {
  return (
    <Switch>
      <Route path="/app" exact>
        <Redirect to="/app/history" />
      </Route>
      <Route path="/app/history" component={History} />
      <Route path="/app/transfer" component={Transfer} />
      <Route path="/app/deposit" component={Deposit} />
      <Route path="/app/withdraw" component={Withdraw} />
    </Switch>
  );
}
