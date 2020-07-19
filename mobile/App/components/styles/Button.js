import styled from 'styled-components/native';
import Color from '../../themes/color';

export const Container = styled.TouchableOpacity`
  padding-horizontal: 50px;
  padding-vertical: 15px;
  margin: 10px;
  background-color: ${({inverted, opacity}) =>
    opacity ? 'transparent' : inverted ? Color.text : Color.accent};
  border-radius: 50px;
`;

export const Title = styled.Text`
  color: ${({inverted, opacity}) =>
    !inverted && !opacity ? Color.text : Color.accent};
  text-align: center;
  font-size: ${({opacity}) => (opacity ? 22 : 18)}px;
`;
