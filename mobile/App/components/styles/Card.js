import styled from 'styled-components/native';
import Color from '../../themes/color';
import IconButton from '../IconButton';

export const Container = styled.View`
  height: 240px;
  justify-content: space-between;
  background-color: ${Color.accent};
  border-radius: 10px;
  padding: 20px;
  margin-horizontal: 20px;
  margin-top: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: ${({spaceBetween = true}) =>
    !spaceBetween ? 'flex-start' : 'space-between'};
  align-items: center;
`;

export const Bank = styled.Text`
  color: ${Color.text};
  font-weight: bold;
  font-size: 24px;
`;

export const Icon = styled(IconButton)`
  margin: 5px;
`;

export const Column = styled.View``;

export const CardNumber = styled.Text`
  font-size: 28px;
  color: ${Color.text};
  margin-top: 40px;
`;

export const CardExpire = styled.Text`
  align-self: flex-end;
  color: ${Color.text};
`;

export const Chip = styled.View`
  height: 48px;
  width: 56px;
  margin-top: 35px;
  border-radius: 8px;
  background-color: ${Color.chip};
`;

export const Label = styled.Text`
  color: ${Color.text};
  margin-right: 10px;
`;

export const Value = styled.Text`
  color: ${Color.text};
  font-size: 18px;
  margin-right: 10px;
`;

export const Name = styled.Text`
  color: ${Color.text};
  font-size: 24px;
`;

export const Visa = styled.Image`
  align-self: flex-end;
`;
