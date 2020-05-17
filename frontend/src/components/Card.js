import React, { useState, useContext } from 'react';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import {
  Container,
  ColumnLayout,
  BankName,
  CardNumber,
  CardExpire,
  AccountContent,
  Label,
  Number,
  Username,
  SpaceBetweenLayout,
  SeeButton,
  Chip,
  VisaLogo,
} from './styles/Card';

import UserContext from '../context/UserContext';
import {
  formatCardNumber,
  formatAccountNumber,
  formatExpireDate,
} from '../utils/Format';

import visaLogo from '../assets/visa.png';

export default function Card() {
  const [user] = useContext(UserContext);
  const [showInfo, setShowInfo] = useState(false);

  function handleShowInfo() {
    setShowInfo(!showInfo);
  }

  return (
    <Container>
      <ColumnLayout>
        <BankName>Banco</BankName>
        <CardNumber>
          {showInfo
            ? formatCardNumber(user.card_number)
            : '****  ****  ****  ****'}
        </CardNumber>
        <CardExpire>
          {showInfo ? formatExpireDate(user.card_expire) : '**/**'}
        </CardExpire>
        <AccountContent>
          <ColumnLayout>
            <Label>Ag.</Label>
            <Number>{showInfo ? user.agency : '****'}</Number>
          </ColumnLayout>
          <ColumnLayout>
            <Label>Conta</Label>
            <Number>
              {showInfo ? formatAccountNumber(user.account_number) : '******-*'}
            </Number>
          </ColumnLayout>
        </AccountContent>
        <Username>{showInfo ? user.name : '*********************'}</Username>
      </ColumnLayout>
      <SpaceBetweenLayout>
        <SeeButton type="button" onClick={handleShowInfo}>
          {!showInfo && <FiEyeOff size={24} />}
          {showInfo && <FiEye size={24} />}
        </SeeButton>
        <Chip />
        <VisaLogo src={visaLogo} />
      </SpaceBetweenLayout>
    </Container>
  );
}
