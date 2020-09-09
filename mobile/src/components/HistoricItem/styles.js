import styled from 'styled-components/native';

export const Container = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding-horizontal: 20px;
	padding-vertical: 20px;
	margin: 10px;
	background-color: ${({ theme }) => theme.colors.secondary};
	border-radius: 8px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.text};
`;

export const Value = styled.Text`
	color: ${({ positive }) => (positive ? '#05FF00' : '#FF6538')};
`;
