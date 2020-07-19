import React from 'react';

import {
  Container,
  Row,
  Bank,
  Icon,
  Column,
  CardNumber,
  CardExpire,
  Chip,
  Label,
  Value,
  Name,
  Visa,
} from './styles/Card';

export default function Card() {
  return (
    <Container>
      <Row>
        <Bank>Banco</Bank>
        <Icon name="eye" />
      </Row>
      <Row>
        <Column>
          <CardNumber>4052 4231 5181 9521</CardNumber>
          <CardExpire>09/23</CardExpire>
        </Column>
        <Chip />
      </Row>
      <Row>
        <Column>
          <Row spaceBetween={false}>
            <Column>
              <Label>Ag.</Label>
              <Value>1088</Value>
            </Column>
            <Column>
              <Label>Conta</Label>
              <Value>219433-3</Value>
            </Column>
          </Row>
          <Name>Isaac Santos de Oliveira</Name>
        </Column>
        <Visa source={require('../assets/ic-visa.png')} />
      </Row>
    </Container>
  );
}
