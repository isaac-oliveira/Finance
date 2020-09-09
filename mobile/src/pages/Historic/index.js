import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

import {
	Container,
	BalanceContainer,
	BalanceLabel,
	BalanceValue,
	List,
	Title,
} from './styles';

import Header from '../../components/Header';
import HistoricItem from '../../components/HistoricItem';
import FinanceApi from '../../services/api';
import { formatMoney } from '../../utils';

const Historic = () => {
	const route = useRoute();
	const { balance } = route.params;

	const [historics, setHistorics] = useState([]);

	useEffect(() => {
		FinanceApi.fetchGetHistorics().then((response) => {
			setHistorics(response.data);
		});
	}, []);

	return (
		<Container>
			<Header title="Histórico" />
			<BalanceContainer>
				<BalanceLabel>Saldo:</BalanceLabel>
				<BalanceValue>{formatMoney(balance)}</BalanceValue>
			</BalanceContainer>
			<List
				data={historics}
				keyExtractor={(item) => String(item.id)}
				renderItem={({ item }) => (
					<HistoricItem title={item.type} value={item.value} />
				)}
			/>
		</Container>
	);
};

export default Historic;
