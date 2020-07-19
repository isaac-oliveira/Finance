import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import Color from '../../themes/color';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${Color.secundary};
  margin: 10px;
  padding: 5px;
  border-radius: 50px;
  ${({width}) => (width ? `width: ${width - 5.5}%;` : '')}
`;

export const Icon = styled(Feather)`
  padding-left: 15px;
  padding-vertical: 10px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  margin-horizontal: 15px;
  color: ${Color.text};
`;
