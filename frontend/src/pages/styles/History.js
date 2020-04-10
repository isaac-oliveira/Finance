import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: rgba(216, 228, 199, 0.2);
  justify-content: flex-end;
  align-items: center;
`;

export const Logo = styled.img`
  display: flex;
  padding-top: 60px;
  padding-bottom: 30px;
`;

export const List = styled.ul`
  width: 100%;
  height: 60%;
  overflow-y: scroll;
  padding: 20px 60px;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
  margin: 20px;
  background-color: #6b7069;
  border-radius: 10px;
`;

export const Type = styled.p``;

export const Value = styled.p`
  color: ${({ positive }) => (positive ? '#05FF00' : '#FF6538')};
`;
