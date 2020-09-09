import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
	Container,
	TitleContainer,
	Title,
	Form,
	ButtonContainer,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonBottom from '../../components/ButtonBottom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
	const emailInputRef = useRef(null);
	const passwordInputRef = useRef(null);
	const [loading, setLoading] = useState(false);

	const { login } = useAuth();

	const navigation = useNavigation();

	async function handleLogin() {
		setLoading(true);
		const email = emailInputRef.current.value;
		const password = passwordInputRef.current.value;

		const { ok, data } = await login(email, password);

		if (!ok) {
			setLoading(false);
			Alert.alert('Ops!', data.message || 'Servidor não está respondendo');
		}
	}

	function handleNextInput() {
		passwordInputRef.current.focus();
	}

	function handleNavigateRegister() {
		navigation.navigate('Register');
	}

	return (
		<Container>
			<TitleContainer>
				<Title>LOGIN</Title>
			</TitleContainer>
			<Form>
				<Input
					ref={emailInputRef}
					name="mail"
					placeholder="E-mail"
					onSubmitEditing={handleNextInput}
					returnKeyType="next"
					defaultValue="isaac98"
				/>
				<Input
					ref={passwordInputRef}
					name="key"
					placeholder="Senha"
					secureTextEntry
					onSubmitEditing={handleLogin}
					returnKeyType="go"
					defaultValue="12345"
				/>
				<ButtonContainer>
					<Button loading={loading} title="Entrar" onPress={handleLogin} />
				</ButtonContainer>
			</Form>
			<ButtonBottom title="CRIAR CONTA" onPress={handleNavigateRegister} />
		</Container>
	);
};

export default Login;
