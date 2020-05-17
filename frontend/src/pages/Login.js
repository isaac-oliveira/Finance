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

export default function Login() {
  const [login, setLogin] = useState('isaac98');
  const [password, setPassword] = useState('12345');
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  async function handleLogin() {
    setLoading(true);
    const response = await FinanceApi.login(login, password);
    console.log(response);
    // eslint-disable-next-line no-alert
    if (response.ok) {
      await localStorage.setItem('@Finance:token', response.data.token);
      await localStorage.setItem('@Finance:userId', response.data.userId);
      setLoading(false);

      return history.push('/home');
    }
    setLoading(false);
    // eslint-disable-next-line no-alert
    return alert(response.data ? response.data.message : 'Erro desconhecido');
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
          <Input placeholder="LOGIN" value={login} onChangeText={setLogin} />
          <Input
            placeholder="SENHA"
            type="password"
            value={password}
            onChangeText={setPassword}
          />
          <Button loading={loading} title="ENTRAR" onClick={handleLogin} />
        </Form>
      </Content>
    </Container>
  );
}
