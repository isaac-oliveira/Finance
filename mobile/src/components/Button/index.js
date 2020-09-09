import React from 'react';

import { Container, Title, Loading } from './styles';

const Button = ({ title, inverted, onPress, loading }) => {
	return (
		<Container inverted={inverted} disabled={loading} onPress={onPress}>
			{loading && <Loading size="small" color="#fff" />}
			<Title inverted={inverted}>{title}</Title>
		</Container>
	);
};

export default Button;
