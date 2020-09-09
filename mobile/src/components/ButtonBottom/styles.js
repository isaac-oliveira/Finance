import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	width: 95%;
	justify-content: center;
	align-items: center;
	border-top-width: 2px;
	border-top-color: ${({ theme }) => theme.colors.secondary};
	padding-vertical: 30px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.textAccent};
	font-size: 22px;
`;
