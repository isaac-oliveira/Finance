import React, { useContext, useState, useEffect } from 'react';

import {
  Container,
  Logo,
  List,
  ItemContainer,
  Type,
  Value,
} from './styles/History';

import UserContext from '../context/UserContext';
import FinanceApi from '../services/api';
import { formatBrCurrency } from '../utils/Format';

import dollarLogo from '../assets/dollar.png';

export default function History({ onPageChange }) {
  const [user] = useContext(UserContext);
  const [historics, setHistorics] = useState([]);

  useEffect(() => {
    onPageChange('history');
    async function load() {
      const response = await FinanceApi.getHistorics(user.id);
      setHistorics(response.data);
    }
    load();
  }, [onPageChange]);

  return (
    <Container>
      <Logo src={dollarLogo} />
      <List>
        {historics.map((historic) => (
          <ItemContainer key={historic.id}>
            <Type>{historic.type}</Type>
            <Value positive={historic.value >= 0}>
              {formatBrCurrency(historic.value)}
            </Value>
          </ItemContainer>
        ))}
      </List>
    </Container>
  );
}
