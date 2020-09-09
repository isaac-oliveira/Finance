import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
	Container,
	Content,
	Img,
	Form,
	AccountInfoContainer,
	AgencyContainer,
	AccountNumberContainer,
	ButtonContainer,
} from './styles';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import useAuth from '../../hooks/useAuth';
import FinanceApi from '../../services/api';

const Transfer = () => {
	const [loading, setLoading] = useState(false);

	const nameInputRef = useRef(null);
	const agencyInputRef = useRef(null);
	const accountNumberInputRef = useRef(null);
	const valueInputRef = useRef(null);

	const { userId } = useAuth();

	const navigation = useNavigation();

	async function handleTransfer() {
		setLoading(true);
		const name = nameInputRef.current.value;
		const agency = agencyInputRef.current.value;
		const accountNumber = accountNumberInputRef.current.value;
		const value = valueInputRef.current.value;

		const response = await FinanceApi.fetchTransfer(
			userId,
			agency,
			accountNumber,
			value,
		);

		console.log(response);

		if (response.ok) {
			navigation.pop();
			navigation.navigate('Confirmation');
		} else {
			setLoading(false);
		}
	}

	return (
		<Container>
			<Header title="Transferência" />
			<Content>
				<Img source={require('../../assets/icons/ic-repeat.png')} />
				<Form>
					<Input ref={nameInputRef} placeholder="Nome" defaultValue="Josefa" />
					<AccountInfoContainer>
						<AgencyContainer>
							<Input
								ref={agencyInputRef}
								keyboardType="numeric"
								placeholder="Agência"
								defaultValue="9529"
							/>
						</AgencyContainer>
						<AccountNumberContainer>
							<Input
								ref={accountNumberInputRef}
								keyboardType="numeric"
								placeholder="Conta"
								defaultValue="17306086"
							/>
						</AccountNumberContainer>
					</AccountInfoContainer>
					<Input
						ref={valueInputRef}
						keyboardType="numeric"
						placeholder="Valor"
					/>
					<ButtonContainer>
						<Button
							loading={loading}
							title="Transferir"
							onPress={handleTransfer}
						/>
					</ButtonContainer>
				</Form>
			</Content>
		</Container>
	);
};

export default Transfer;
