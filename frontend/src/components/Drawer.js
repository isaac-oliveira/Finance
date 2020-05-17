import React, { useContext, useState } from 'react';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

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

import UserContext from '../context/UserContext';
import Card from './Card';
import { formatBrCurrency } from '../utils/Format';

export default function Drawer({ page }) {
  const [user] = useContext(UserContext);
  const [showBalance, setShowBalance] = useState(false);
  const history = useHistory();

  function handleShowBalance() {
    setShowBalance(!showBalance);
  }

  async function handleLogout() {
    await localStorage.clear();
    history.push('/');
  }

  return (
    <Container>
      <Header>
        <Card setShowBalance={() => setShowBalance(!showBalance)} />
        <BalanceContainer>
          <BalanceLabel>Saldo:</BalanceLabel>
          <BalanceValue>
            {showBalance ? formatBrCurrency(user.balance) : 'R$ ----'}
          </BalanceValue>
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
      <Logout onClick={handleLogout}>SAIR</Logout>
    </Container>
  );
}
