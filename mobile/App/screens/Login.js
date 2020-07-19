import React from 'react';

import {
  Container,
  TitleView,
  Title,
  Form,
  RegisterContainer,
  RegisterText,
} from './styles/Auth';

import Input from '../components/Input';
import Button from '../components/Button';
import Divider from '../components/Divider';

export default function Login({navigation}) {
  const goRegister = () => navigation.navigate('Register');

  return (
    <Container>
      <TitleView>
        <Title>LOGIN</Title>
      </TitleView>
      <Form>
        <Input icon="mail" placeholder="E-MAIL" />
        <Input icon="lock" placeholder="SENHA" secureTextEntry />
        <Button title="ENTRAR" />
      </Form>
      <RegisterContainer>
        <RegisterText>Não tem conta?</RegisterText>
        <Divider />
        <Button title="CRIAR CONTA" opacity onPress={goRegister} />
      </RegisterContainer>
    </Container>
  );
}
