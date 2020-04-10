import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Logo, Title, RowLayout } from './styles/Confirmation';

import checkLogo from '../assets/check.png';
import Button from '../components/Button';

export default function Confirmation() {
  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  return (
    <Container>
      <Logo src={checkLogo} />
      <Title>
        Operação realizada
        <br />
        com sucesso
      </Title>
      <RowLayout>
        <Button title="Voltar" onClick={handleBack} />
        <Button title="Comprovante" color="white" />
      </RowLayout>
    </Container>
  );
}
