import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.secondary};
	border-radius: ${({ theme }) => theme.metrics.borderRadius}px;
	margin-vertical: 10px;
	padding-horizontal: 20px;
	padding-vertical: 5px;
`;

export const Icon = styled(Feather)`
	padding-right: 10px;
`;

export const Field = styled.TextInput.attrs(({ theme }) => ({
	placeholderTextColor: theme.colors.textPlaceHolder,
}))`
	color: ${({ theme }) => theme.colors.text};
	width: 100%;
	font-size: 20px;
`;
