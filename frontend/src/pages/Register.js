import React, { useState } from 'react';
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
import FinanceApi from '../services/api';

export default function Register() {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleRegister() {
    const response = await FinanceApi.register(name, login, password);
    console.log(response);
    // eslint-disable-next-line no-alert
    if (!response.ok) return alert(response.data.message);
    await localStorage.setItem('@Finance:token', response.data.token);
    await localStorage.setItem('@Finance:userId', response.data.userId);
    return history.push('/home');
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
          <Input placeholder="NOME" value={name} onChangeText={setName} />
          <Input placeholder="LOGIN" value={login} onChangeText={setLogin} />
          <Input
            placeholder="SENHA"
            type="password"
            value={password}
            onChangeText={setPassword}
          />
          <Button title="CADASTRAR" onClick={handleRegister} />
        </Form>
      </Content>
    </Container>
  );
}
