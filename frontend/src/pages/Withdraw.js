import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Logo, Title } from './styles/Withdraw';

import Input from '../components/Input';
import Button from '../components/Button';

import dollarLogo from '../assets/dollar.png';

export default function Withdraw({ onPageChange }) {
  const history = useHistory();

  useEffect(() => {
    onPageChange('withdraw');
  }, [onPageChange]);

  function handleWithdraw() {
    history.push('/home/confirmation');
  }

  return (
    <Container>
      <Logo src={dollarLogo} />
      <Title>Saque</Title>
      <Input width="250px" placeholder="Valor" />
      <Button title="Sacar" onClick={handleWithdraw} />
    </Container>
  );
}
