import styled from 'styled-components/native';

export const Container = styled.ScrollView`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
	flex: 1;
	align-items: center;
`;

export const BalanceContainer = styled.View`
	flex-direction: row;
	width: 95%;
	justify-content: space-around;
	align-items: center;
	border-bottom-width: 2px;
	border-bottom-color: ${({ theme }) => theme.colors.secondary};
	padding-vertical: 20px;
`;

export const BalanceLabel = styled.Text`
	font-size: 24px;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.text};
`;

export const BalanceValue = styled.Text`
	font-weight: normal;
`;

export const IconButton = styled.TouchableOpacity`
	padding: 10px;
`;

export const ButtonsContainer = styled.View`
	width: 100%;
	flex-direction: row;
	flex-wrap: wrap;
	padding-vertical: 20px;
	padding-horizontal: 20px;
`;
