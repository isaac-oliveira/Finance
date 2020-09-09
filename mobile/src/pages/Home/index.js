import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import {
	Container,
	Content,
	BalanceContainer,
	BalanceLabel,
	BalanceValue,
	IconButton,
	ButtonsContainer,
} from './styles';

import ButtonBottom from '../../components/ButtonBottom';
import ButtonMenu from '../../components/ButtonMenu';
import Card from '../../components/Card';
import useAuth from '../../hooks/useAuth';
import FinanceApi from '../../services/api';
import { formatMoney } from '../../utils';

const Home = () => {
	const [user, setUser] = useState(null);
	const [showBalance, setShowBalance] = useState(false);
	const { userId, logout } = useAuth();

	const navigation = useNavigation();

	useEffect(() => {
		FinanceApi.fetchGetUser(userId).then((response) => {
			setUser(response.data);
		});
	}, []);

	async function handleLogout() {
		await logout();
	}

	function handleShowBalance() {
		setShowBalance(!showBalance);
	}

	function handleNavigateToHistoric() {
		navigation.navigate('Historic', { balance: user?.balance });
	}

	function handleNavigateToPayment() {
		navigation.navigate('Payment');
	}

	function handleNavigateToTransfer() {
		navigation.navigate('Transfer');
	}

	return (
		<Container>
			<Card
				number={user?.card_number}
				expire={user?.card_expire}
				agency={user?.agency}
				account={user?.account_number}
				name={user?.name}
			/>
			<Content>
				<BalanceContainer>
					<BalanceLabel>
						Total:{' '}
						<BalanceValue>
							{showBalance ? formatMoney(user?.balance || 0) : 'R$ - - - - -'}
						</BalanceValue>
					</BalanceLabel>
					<IconButton onPress={handleShowBalance}>
						<Icon
							name={showBalance ? 'eye-off' : 'eye'}
							color="#fff"
							size={24}
						/>
					</IconButton>
				</BalanceContainer>
				<ButtonsContainer>
					<ButtonMenu
						icon={require('../../assets/icons/ic-dollar.png')}
						title="Histórico"
						onPress={handleNavigateToHistoric}
					/>
					<ButtonMenu
						icon={require('../../assets/icons/ic-qr-code.png')}
						title="Pagar"
						onPress={handleNavigateToPayment}
					/>
					<ButtonMenu
						icon={require('../../assets/icons/ic-repeat.png')}
						title="Transferências"
						onPress={handleNavigateToTransfer}
					/>
				</ButtonsContainer>
				<ButtonBottom title="SAIR" onPress={handleLogout} />
			</Content>
		</Container>
	);
};

export default Home;
