import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.accent};
	border-radius: 8px;
	margin-vertical: 10px;
	margin-horizontal: 20px;
	padding: 15px;
`;

export const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
`;

export const Top = styled(Row)`
	height: ${height * 0.1}px;
`;

export const Bank = styled.Text`
	font-size: 34px;
	color: ${({ theme }) => theme.colors.text};
	font-weight: bold;
`;

export const IconButton = styled.TouchableOpacity`
	padding: 20px;
`;

export const Center = styled(Row)`
	align-items: center;
`;

export const CardInfoContainer = styled.View`
	align-self: flex-start;
`;

export const CardNumber = styled.Text.attrs({
	numberOfLines: 1,
	adjustsFontSizeToFit: true,
})`
	font-size: 32px;
	color: ${({ theme }) => theme.colors.text};
`;

export const CardExpire = styled.Text.attrs({
	adjustsFontSizeToFit: true,
})`
	align-self: flex-end;
	font-size: 18px;
	color: ${({ theme }) => theme.colors.text};
`;

export const Chip = styled.View`
	width: 68px;
	height: 54px;
	border-radius: 8px;
	margin: 5px;
	background-color: ${({ theme }) => theme.colors.chip};
`;

export const Bottom = styled(Row)`
	align-items: flex-end;
	height: ${height * 0.1}px;
`;

export const CountInfoContainer = styled.View`
	flex-direction: row;
`;

export const Column = styled.View`
	flex: 1;
	margin-right: 10px;
`;

export const CountText = styled.Text.attrs({
	adjustsFontSizeToFit: true,
})`
	font-size: 16px;
	color: ${({ theme }) => theme.colors.text};
`;

export const Name = styled.Text.attrs({
	numberOfLines: 1,
	adjustsFontSizeToFit: true,
})`
	font-size: 26px;
	color: ${({ theme }) => theme.colors.text};
`;

export const Img = styled.Image`
	width: 68px;
	height: 54px;
`;
