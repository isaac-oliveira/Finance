import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

export const Container = styled.TouchableOpacity`
	padding-vertical: 15px;
	margin-vertical: 10px;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme, inverted }) =>
		!inverted ? theme.colors.accent : theme.colors.text};
	border-radius: ${({ theme }) => theme.metrics.borderRadius}px;
`;

export const Title = styled.Text`
	color: ${({ theme, inverted }) =>
		!inverted ? theme.colors.text : theme.colors.accent};
	font-size: 20px;
`;

export const Loading = styled(ActivityIndicator)`
	position: absolute;
	left: 20px;
`;
