import React from 'react';

import { Container } from './styles/Home';

import Drawer from '../components/Drawer';
import AppRoute from '../routes/AppRoute';

export default function Home() {
  return (
    <Container>
      <Drawer />
      <AppRoute />
    </Container>
  );
}
