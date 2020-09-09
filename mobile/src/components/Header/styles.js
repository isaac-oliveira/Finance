import styled from 'styled-components/native';

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
	padding: 10px;
`;

export const BackButton = styled.TouchableOpacity`
	padding: 10px;
	margin: 10px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.text};
	font-size: 22px;
	position: absolute;
	left: 0;
	right: 0;
	text-align: center;
	z-index: -1;
`;
