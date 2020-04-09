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

export default function Register() {
  const history = useHistory();

  function register() {
    history.push('/home');
  }
  return (
    <Container>
      <ButtonContent>
        <LabelButton>Já tem conta?</LabelButton>
        <TextButton to="/login">LOGIN</TextButton>
      </ButtonContent>
      <Content>
        <RowLayout>
          <Line />
          <Title>CADASTRAR</Title>
          <Line />
        </RowLayout>
        <Form>
          <Input placeholder="NOME" />
          <Input placeholder="LOGIN" />
          <Input placeholder="SENHA" />
          <Button title="CADASTRAR" onClick={register} />
        </Form>
      </Content>
    </Container>
  );
}
