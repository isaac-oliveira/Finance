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

export default function Register({navigation}) {
  const goLogin = () => navigation.navigate('Login');

  return (
    <Container>
      <TitleView>
        <Title>CADASTRAR</Title>
      </TitleView>
      <Form>
        <Input icon="user" placeholder="NAME" />
        <Input icon="mail" placeholder="E-MAIL" />
        <Input icon="lock" placeholder="SENHA" secureTextEntry />
        <Button title="CADASTRAR" />
      </Form>
      <RegisterContainer>
        <RegisterText>Já tem conta?</RegisterText>
        <Divider />
        <Button title="LOGIN" opacity onPress={goLogin} />
      </RegisterContainer>
    </Container>
  );
}
