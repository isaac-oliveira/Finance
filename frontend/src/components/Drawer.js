import React, { useState } from 'react';
import { FiEyeOff, FiEye } from 'react-icons/fi';

import {
  Container,
  Header,
  BalanceContainer,
  BalanceLabel,
  BalanceValue,
  SeeButton,
  Line,
  NavItem,
  Logout,
} from './styles/Drawer';

import Card from './Card';

export default function Drawer({ page }) {
  const [showBalance, setShowBalance] = useState(false);

  function handleShowBalance() {
    setShowBalance(!showBalance);
  }

  return (
    <Container>
      <Header>
        <Card setShowBalance={() => setShowBalance(!showBalance)} />
        <BalanceContainer>
          <BalanceLabel>Saldo:</BalanceLabel>
          <BalanceValue>{showBalance ? 'R$ 0,00' : 'R$ ----'}</BalanceValue>
          <SeeButton type="button" onClick={handleShowBalance}>
            {!showBalance && <FiEyeOff size={18} />}
            {showBalance && <FiEye size={18} />}
          </SeeButton>
        </BalanceContainer>
        <Line />
      </Header>
      <NavItem selected={page === 'history'} to="/home/history">
        Histórico
      </NavItem>
      <NavItem selected={page === 'transfer'} to="/home/transfer">
        Transferência
      </NavItem>
      <NavItem selected={page === 'withdraw'} to="/home/withdraw">
        Saque
      </NavItem>
      <NavItem selected={page === 'deposit'} to="/home/deposit">
        Deposito
      </NavItem>
      <Line />
      <Logout to="/login">SAIR</Logout>
    </Container>
  );
}
