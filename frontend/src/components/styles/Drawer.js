import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-bottom: 0;
`;

export const BalanceContainer = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: center;
`;

export const BalanceLabel = styled.p`
  display: flex;
  padding: 20px 10px 0 10px;
  font-size: 18px;
  font-weight: 400;
`;

export const BalanceValue = styled(BalanceLabel)`
  align-self: flex-end;
`;

export const SeeButton = styled.button`
  display: flex;
  padding: 3px;
  background-color: transparent;
  outline: none;
  border: none;
  align-self: flex-end;
`;

export const Line = styled.div`
  display: flex;
  background-color: #505351;
  width: 100%;
  height: 4px;
  margin: 5px 0;
`;

export const NavItem = styled(Link)`
  display: flex;
  flex: 1;
  background-color: ${({ selected }) =>
    selected ? 'rgba(216, 228, 199, 0.2)' : 'transparent'};
  color: #fff;
  text-decoration: none;
  justify-content: center;
  align-items: center;
`;

export const Logout = styled(Link)`
  display: flex;
  flex: 1;
  font-size: 18px;
  font-weight: 400;
  color: #c26246;
  text-decoration: none;
  justify-content: center;
  align-items: center;
`;
