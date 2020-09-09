import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
	Container,
	TitleContainer,
	Title,
	Form,
	ButtonContainer,
	ButtonLogin,
	ButtonLoginText,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonBottom from '../../components/ButtonBottom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
	const nameInputRef = useRef(null);
	const emailInputRef = useRef(null);
	const passwordInputRef = useRef(null);
	const [loading, setLoading] = useState(false);

	const { register } = useAuth();

	const navigation = useNavigation();

	async function handleRegister() {
		setLoading(true);
		const name = nameInputRef.current.value;
		const email = emailInputRef.current.value;
		const password = passwordInputRef.current.value;

		const { ok, data } = await register(name, email, password);

		if (!ok) {
			setLoading(false);
			Alert.alert('Ops!', data.message || 'Servidor não está respondendo');
		}
	}

	function handleNavigateLogin() {
		navigation.navigate('Login');
	}

	return (
		<Container>
			<TitleContainer>
				<Title>CADASTRO</Title>
			</TitleContainer>
			<Form>
				<Input ref={nameInputRef} name="user" placeholder="Nome" />
				<Input ref={emailInputRef} name="mail" placeholder="E-mail" />
				<Input
					ref={passwordInputRef}
					name="key"
					placeholder="Senha"
					secureTextEntry
				/>
				<ButtonContainer>
					<Button
						loading={loading}
						title="Cadastrar"
						onPress={handleRegister}
					/>
				</ButtonContainer>
			</Form>
			<ButtonBottom title="FAZER LOGIN" onPress={handleNavigateLogin} />
		</Container>
	);
};

export default Register;
