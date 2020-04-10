import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  border-radius: 30px;
  padding: 10px;
  margin: 10px;
  ${({ width }) => (width ? `width: ${width};` : '')}
  text-align: center;
  background-color: rgba(216, 228, 199, 0.2);
  &::placeholder {
    color: #fff;
  }
`;
