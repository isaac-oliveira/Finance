import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import History from '../pages/History';
import Transfer from '../pages/Transfer';
import Deposit from '../pages/Deposit';
import Withdraw from '../pages/Withdraw';
import Confirmation from '../pages/Confirmation';

export default function AppRoute({ onPageChange }) {
  return (
    <Switch>
      <Route path="/home" exact>
        <Redirect to="/home/history" />
      </Route>
      <Route path="/home/history">
        <History onPageChange={onPageChange} />
      </Route>
      <Route path="/home/transfer">
        <Transfer onPageChange={onPageChange} />
      </Route>
      <Route path="/home/deposit">
        <Deposit onPageChange={onPageChange} />
      </Route>
      <Route path="/home/withdraw">
        <Withdraw onPageChange={onPageChange} />
      </Route>
      <Route path="/home/confirmation">
        <Confirmation />
      </Route>
    </Switch>
  );
}
