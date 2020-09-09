import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const BalanceContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-vertical: 10px;
	margin-horizontal: 20px;
	padding-vertical: 10px;
	padding-horizontal: 20px;
	border-bottom-width: 2px;
	border-bottom-color: ${({ theme }) => theme.colors.secondary};
`;

export const BalanceLabel = styled.Text`
	color: ${({ theme }) => theme.colors.text};
	font-size: 18px;
`;

export const BalanceValue = styled.Text`
	color: ${({ theme }) => theme.colors.text};
	font-size: 18px;
`;

export const List = styled.FlatList`
	flex: 1;
`;

export const Title = styled.Text``;
