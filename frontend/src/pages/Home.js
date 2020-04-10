import React, { useState } from 'react';

import { Container } from './styles/Home';

import Drawer from '../components/Drawer';
import AppRoute from '../routes/AppRoute';

export default function Home() {
  const [page, setPage] = useState('history');
  return (
    <Container>
      <Drawer page={page} />
      <AppRoute onPageChange={setPage} />
    </Container>
  );
}
