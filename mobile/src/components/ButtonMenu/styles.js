import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.TouchableOpacity`
	width: ${width * 0.35}px;
	height: ${width * 0.4}px;
	margin: 20px;
	border-radius: 8px;
	justify-content: space-around;
	align-items: center;
	padding-vertical: 20px;
	padding-horizontal: 10px;
	background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Img = styled.Image`
	flex: 1;
	resize-mode: contain;
`;

export const Title = styled.Text.attrs({
	numberOfLines: 1,
	adjustsFontSizeToFit: true,
})`
	color: ${({ theme }) => theme.colors.text};
	font-size: 24px;
`;
