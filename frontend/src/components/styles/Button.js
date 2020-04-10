import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: 30px;
  margin: 10px;
  padding: 10px 40px;
  align-self: center;
  background-color: ${({ color }) => color};
  ${({ color }) => (color === 'white' ? 'color: #c26246;' : '')}
`;
