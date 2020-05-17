import React, { useState, useEffect } from 'react';
import { Container } from './styles/Home';

import Drawer from '../components/Drawer';
import AppRoute from '../routes/AppRoute';
import UserContext from '../context/UserContext';
import FinanceApi from '../services/api';

export default function Home() {
  const [user, setUser] = useState({});
  const [page, setPage] = useState('history');

  useEffect(() => {
    async function load() {
      const userId = await localStorage.getItem('@Finance:userId');
      const response = await FinanceApi.getUser(userId);

      setUser(response.data);
    }
    load();
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Container>
        <Drawer page={page} />
        <AppRoute onPageChange={setPage} />
      </Container>
    </UserContext.Provider>
  );
}
