import styled from 'styled-components/native';
import IconButton from '../IconButton';
import Color from '../../themes/color';

export const Container = styled.View`
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled(IconButton)`
  position: absolute;
  left: 0;
`;

export const Title = styled.Text`
  color: ${Color.text};
  font-size: 22px;
  padding: 10px;
`;
