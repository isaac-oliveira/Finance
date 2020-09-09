import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.primary};
	align-items: center;
`;

export const TitleContainer = styled.View`
	flex: 0.5;
	justify-content: flex-end;
	align-items: center;
`;

export const Title = styled.Text`
	font-size: 54px;
	color: ${({ theme }) => theme.colors.textAccent};
`;

export const Form = styled.View`
	flex: 1;
	width: 80%;
	justify-content: center;
	align-items: center;
`;

export const ButtonContainer = styled.View`
	width: 75%;
	margin: 15px;
`;
