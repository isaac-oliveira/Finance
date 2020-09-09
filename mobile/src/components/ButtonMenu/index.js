import React from 'react';

import { Container, Img, Title } from './styles';

const ButtonMenu = ({ icon, title, onPress }) => {
	return (
		<Container onPress={onPress}>
			<Img source={icon} />
			<Title>{title}</Title>
		</Container>
	);
};

export default ButtonMenu;
