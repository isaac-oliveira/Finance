import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Logo, RowLayout } from './styles/Transfer';

import Input from '../components/Input';
import Button from '../components/Button';
import UserContext from '../context/UserContext';
import FinanceApi from '../services/api';

import transferLogo from '../assets/transfer.png';

export default function Transfer({ onPageChange }) {
  const [user, setUser] = useContext(UserContext);
  const [name, setName] = useState('');
  const [agency, setAgency] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [value, setValue] = useState('');
  const history = useHistory();

  useEffect(() => {
    onPageChange('transfer');
  }, [onPageChange]);

  async function handleTransfer() {
    const response = await FinanceApi.transfer(
      user.id,
      agency,
      accountNumber,
      value,
    );
    if (response.ok) {
      setUser({ ...user, balance: response.data.balance });
      return history.push('/home/confirmation');
    }
    return alert(response.data.message);
  }

  return (
    <Container>
      <Logo src={transferLogo} />
      <Input
        width="250px"
        value={name}
        placeholder="Nome"
        onChangeText={setName}
      />
      <RowLayout>
        <Input
          width="85px"
          value={agency}
          placeholder="Ag."
          onChangeText={setAgency}
        />
        <Input
          width="145px"
          value={accountNumber}
          placeholder="Conta"
          onChangeText={setAccountNumber}
        />
      </RowLayout>
      <Input
        width="250px"
        value={value}
        placeholder="Valor"
        onChangeText={setValue}
      />
      <Button title="Trasnferir" onClick={handleTransfer} />
    </Container>
  );
}
