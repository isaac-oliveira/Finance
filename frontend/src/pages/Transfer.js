import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Logo, RowLayout } from './styles/Transfer';

import Input from '../components/Input';
import Button from '../components/Button';

import transferLogo from '../assets/transfer.png';

export default function Transfer({ onPageChange }) {
  const history = useHistory();

  useEffect(() => {
    onPageChange('transfer');
  }, [onPageChange]);

  function handleTransfer() {
    history.push('/home/confirmation');
  }

  return (
    <Container>
      <Logo src={transferLogo} />
      <Input width="250px" placeholder="Nome" />
      <RowLayout>
        <Input width="85px" placeholder="Ag." />
        <Input width="145px" placeholder="Conta" />
      </RowLayout>
      <Input width="250px" placeholder="Valor" />
      <Button title="Trasnferir" onClick={handleTransfer} />
    </Container>
  );
}
