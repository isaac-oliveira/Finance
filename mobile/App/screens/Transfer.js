import React from 'react';

import {Container, Logo, FormContainer, Form, Row} from './styles/Transfer';

import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Transfer({navigation}) {
  const goBack = () => navigation.goBack();
  return (
    <Container>
      <Header title="Transferências" onBack={goBack} />
      <Logo source={require('../assets/ic-repeat.png')} />
      <FormContainer>
        <Form>
          <Input placeholder="Nome" />
          <Row>
            <Input placeholder="Agência" width={40} />
            <Input placeholder="Número da conta" width={60} />
          </Row>
          <Input placeholder="Valor" />
        </Form>
        <Button title="Transferir" />
      </FormContainer>
    </Container>
  );
}
