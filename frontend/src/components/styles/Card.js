import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 0.8;
  background-color: #c26246;
  min-width: 350px;
  padding: 15px 25px;
  border-radius: 10px;
`;

export const ColumnLayout = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const BankName = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const CardNumber = styled.p`
  display: flex;
  font-size: 22px;
  font-weight: 400;
  margin-top: 50px;
`;

export const CardExpire = styled.p`
  display: flex;
  font-size: 10px;
  margin-right: 15px;
  margin-bottom: 10px;
  align-self: flex-end;
`;

export const AccountContent = styled.div`
  display: flex;
  flex: 1;
`;

export const Label = styled.p`
  display: flex;
  font-size: 10px;
`;

export const Number = styled.p`
  display: flex;
  font-size: 14px;
  font-weight: 400;
`;

export const Username = styled.p`
  display: flex;
  font-size: 18px;
  font-weight: 400;
  margin-top: 10px;
`;

export const SpaceBetweenLayout = styled.div`
  display: flex;
  flex: 0.2;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 30px;
`;

export const SeeButton = styled.button`
  display: flex;
  padding: 5px 5px;
  background-color: transparent;
  outline: none;
  border: none;
  align-self: flex-end;
`;

export const Chip = styled.div`
  display: flex;
  width: 48px;
  height: 36px;
  background-color: #ca9c69;
  border-radius: 5px;
`;

export const VisaLogo = styled.img`
  display: flex;
  align-self: flex-end;
`;
