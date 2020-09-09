import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const Img = styled.Image`
	width: ${width * 0.25}px;
	height: ${width * 0.25}px;
`;

export const Form = styled.View`
	width: 90%;
	padding-vertical: 40px;
`;

export const AccountInfoContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const AgencyContainer = styled.View`
	width: 32%;
`;

export const AccountNumberContainer = styled.View`
	width: 65%;
`;

export const ButtonContainer = styled.View`
	width: 80%;
	align-self: center;
`;
