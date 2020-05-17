import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Logo, Title } from './styles/Withdraw';

import Input from '../components/Input';
import Button from '../components/Button';
import UserContext from '../context/UserContext';
import FinanceApi from '../services/api';

import dollarLogo from '../assets/dollar.png';

export default function Withdraw({ onPageChange }) {
  const [user, setUser] = useContext(UserContext);
  const [value, setValue] = useState('');
  const history = useHistory();

  useEffect(() => {
    onPageChange('withdraw');
  }, [onPageChange]);

  async function handleWithdraw() {
    const response = await FinanceApi.withdraw(user.id, value);
    if (response.ok) {
      setUser({ ...user, balance: response.data.balance });
      return history.push('/home/confirmation');
    }
    return alert(response.data.message);
  }

  return (
    <Container>
      <Logo src={dollarLogo} />
      <Title>Saque</Title>
      <Input
        width="250px"
        value={value}
        placeholder="Valor"
        onChangeText={setValue}
      />
      <Button title="Sacar" onClick={handleWithdraw} />
    </Container>
  );
}
