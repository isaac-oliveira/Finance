import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  ButtonContent,
  LabelButton,
  TextButton,
  Content,
  RowLayout,
  Line,
  Title,
  Form,
} from './styles/Auth';

import Input from '../components/Input';
import Button from '../components/Button';

export default function Login() {
  const history = useHistory();

  function login() {
    history.push('/home');
  }

  return (
    <Container>
      <ButtonContent>
        <LabelButton>Não tem conta?</LabelButton>
        <TextButton to="/register">CRIAR CONTA</TextButton>
      </ButtonContent>
      <Content>
        <RowLayout>
          <Line />
          <Title>LOGIN</Title>
          <Line />
        </RowLayout>
        <Form>
          <Input placeholder="LOGIN" />
          <Input placeholder="SENHA" />
          <Button title="ENTRAR" onClick={login} />
        </Form>
      </Content>
    </Container>
  );
}
