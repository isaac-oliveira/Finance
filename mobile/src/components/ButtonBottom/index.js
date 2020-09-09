import React from 'react';

import { Container, Title } from './styles';

const ButtonBottom = ({ title, onPress }) => {
	return (
		<Container onPress={onPress}>
			<Title>{title}</Title>
		</Container>
	);
};

export default ButtonBottom;
