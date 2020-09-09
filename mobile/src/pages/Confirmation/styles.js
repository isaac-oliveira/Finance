import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.primary};
	padding: 10px;
`;

export const ImgContainer = styled.View`
	flex: 0.6;
	justify-content: flex-end;
	align-items: center;
`;

export const Img = styled.Image`
	resize-mode: center;
`;

export const Content = styled.View`
	flex: 0.4;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.text};
	font-size: 20px;
	text-align: center;
	margin-vertical: 15px;
`;

export const ButtonPrimaryContainer = styled.View`
	width: 60%;
`;

export const ButtonSecondaryContainer = styled.View`
	width: 40%;
`;
