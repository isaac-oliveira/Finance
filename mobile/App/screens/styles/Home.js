import styled from 'styled-components/native';
import Color from '../../themes/color';

export const Container = styled.View`
  flex: 1;
  background-color: ${Color.primary};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-vertical: 10px;
`;

export const Label = styled.Text`
  color: ${Color.text};
  font-size: 18px;
`;

export const Value = styled.Text`
  color: ${Color.text};
  margin-right: 50px;
  font-size: 18px;
`;

export const Grid = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const GridColumn = styled.View``;

export const GridRow = styled.View`
  flex-direction: row;
`;

export const CardButton = styled.TouchableOpacity`
  width: 140px;
  align-items: center;
  background-color: ${Color.secundary};
  padding: 5px;
  border-radius: 8px;
  margin: 10px;
`;

export const Icon = styled.Image`
  margin: 10px;
`;

export const Title = styled.Text`
  color: ${Color.text};
  padding-bottom: 10px;
`;
