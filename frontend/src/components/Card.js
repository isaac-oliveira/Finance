import React, { useState } from 'react';
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

import visaLogo from '../assets/visa.png';

export default function Card() {
  const [showInfo, setShowInfo] = useState(false);

  function handleShowInfo() {
    setShowInfo(!showInfo);
  }

  return (
    <Container>
      <ColumnLayout>
        <BankName>Banco</BankName>
        <CardNumber>
          {showInfo ? '4615 3489 3051 1987' : '****  ****  ****  ****'}
        </CardNumber>
        <CardExpire>{showInfo ? '08/23' : '**/**'}</CardExpire>
        <AccountContent>
          <ColumnLayout>
            <Label>Ag.</Label>
            <Number>{showInfo ? '1088' : '****'}</Number>
          </ColumnLayout>
          <ColumnLayout>
            <Label>Conta</Label>
            <Number>{showInfo ? '219433-3' : '******-*'}</Number>
          </ColumnLayout>
        </AccountContent>
        <Username>
          {showInfo ? 'Isaac Santos de Oliveira' : '*********************'}
        </Username>
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
