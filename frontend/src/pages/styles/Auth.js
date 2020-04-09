import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  padding: 15px;
`;

export const LabelButton = styled.p`
  font-size: 12px;
  padding: 8px;
`;

export const TextButton = styled(Link)`
  color: #c26246;
  text-decoration: none;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const RowLayout = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;
`;

export const Line = styled.div`
  display: flex;
  flex: 1;
  height: 2px;
  margin: 0 20px;
  background-color: #505351;
`;

export const Title = styled.p`
  color: #ca9c69;
  font-size: 64px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  width: 30%;
  height: 60vh;
`;
