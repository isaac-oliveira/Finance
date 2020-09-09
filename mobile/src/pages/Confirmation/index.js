import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
	Container,
	ImgContainer,
	Img,
	Content,
	Title,
	ButtonPrimaryContainer,
	ButtonSecondaryContainer,
} from './styles';

import Button from '../../components/Button';

import checkIcon from '../../assets/icons/ic-check.png';

const Confirmation = () => {
	const navigation = useNavigation();

	function handleBack() {
		navigation.goBack();
	}

	return (
		<Container>
			<ImgContainer>
				<Img source={checkIcon} />
			</ImgContainer>
			<Content>
				<Title>OPERAÇÃO REALIZADA{'\n'}COM SUCESSO</Title>
				<ButtonSecondaryContainer>
					<Button title="Voltar" onPress={handleBack} />
				</ButtonSecondaryContainer>
			</Content>
		</Container>
	);
};

export default Confirmation;
