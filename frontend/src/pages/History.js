import React, { useState, useEffect } from 'react';

import {
  Container,
  Logo,
  List,
  ItemContainer,
  Type,
  Value,
} from './styles/History';

import dollarLogo from '../assets/dollar.png';

export default function History({ onPageChange }) {
  const [historics, setHistorics] = useState([1, -2]);
  useEffect(() => {
    onPageChange('history');
  }, [onPageChange]);

  return (
    <Container>
      <Logo src={dollarLogo} />
      <List>
        {historics.map((historic) => (
          <ItemContainer>
            <Type>Saque</Type>
            <Value positive={historic >= 0}>{historic}</Value>
          </ItemContainer>
        ))}
      </List>
    </Container>
  );
}
