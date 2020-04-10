import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Logo, Title } from './styles/Deposit';

import Input from '../components/Input';
import Button from '../components/Button';

import dollarLogo from '../assets/dollar.png';

export default function Deposit({ onPageChange }) {
  const history = useHistory();

  useEffect(() => {
    onPageChange('deposit');
  }, [onPageChange]);

  function handleDeposit() {
    history.push('/home/confirmation');
  }

  return (
    <Container>
      <Logo src={dollarLogo} />
      <Title>Depósito</Title>
      <Input width="250px" placeholder="Valor" />
      <Button title="Depositar" onClick={handleDeposit} />
    </Container>
  );
}
