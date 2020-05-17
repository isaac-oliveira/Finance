import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles/Auth';

export default function Splash() {
  const history = useHistory();

  useEffect(() => {
    async function authenticator() {
      const token = await localStorage.getItem('@Finance:token');
      const route = token ? '/home' : '/login';

      history.push(route);
    }
    authenticator();
  });

  return <Container />;
}
