import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Container, BackButton, Title } from './styles';

const Header = ({ title }) => {
	const navigation = useNavigation();

	function handleBack() {
		navigation.goBack();
	}

	return (
		<Container>
			<BackButton onPress={handleBack}>
				<Icon name="arrow-left" color="#fff" size={22} />
			</BackButton>
			<Title>{title}</Title>
		</Container>
	);
};

export default Header;
