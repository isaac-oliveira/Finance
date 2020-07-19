import styled from 'styled-components/native';
import Color from '../../themes/color';

export const Container = styled.View`
  flex: 1;
  background-color: ${Color.primary};
`;

export const Logo = styled.Image`
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.View`
  margin: 30px;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.View`
  width: 100%;
  padding-vertical: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
`;
