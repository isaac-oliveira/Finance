import styled from 'styled-components/native';
import Color from '../../themes/color';

export const Container = styled.View`
  flex: 1;
  background-color: ${Color.primary};
  justify-content: space-between;
`;

export const TitleView = styled.View`
  justify-content: flex-end;
  height: 30%;
`;

export const Title = styled.Text`
  color: ${Color.textAccent};
  font-size: 48px;
  text-align: center;
  align-self: center;
`;

export const Form = styled.View`
  align-items: center;
`;

export const RegisterText = styled.Text`
  color: ${Color.text};
  text-align: center;
  padding: 8px;
`;

export const RegisterContainer = styled.View``;

export const ButtonContainer = styled.TouchableOpacity``;

export const ButtonTitle = styled.Text`
  color: ${Color.accent};
  text-align: center;
  padding: 15px;
  font-size: 22px;
`;
