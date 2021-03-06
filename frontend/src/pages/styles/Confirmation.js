import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: rgba(216, 228, 199, 0.2);
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  display: flex;
  width: 96px;
  height: 160px;
  padding-top: 60px;
  padding-bottom: 10px;
`;

export const Title = styled.p`
  font-size: 32px;
  padding: 10px;
  text-align: center;
`;

export const RowLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
