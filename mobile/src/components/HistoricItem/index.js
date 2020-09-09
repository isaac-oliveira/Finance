import React from 'react';
import { Container, Title, Value } from './styles';

import { formatMoney, OperationType } from '../../utils';

const HistoricItem = ({ title, value }) => {
	return (
		<Container>
			<Title>{OperationType[title] || 'Desconhecido'}</Title>
			<Value positive={value >= 0}>{formatMoney(value)}</Value>
		</Container>
	);
};

export default HistoricItem;
