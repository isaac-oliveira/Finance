import React from 'react';

import {
  Container,
  Row,
  Label,
  Value,
  Grid,
  GridColumn,
  GridRow,
  CardButton,
  Icon,
  Title,
} from './styles/Home';
import Card from '../components/Card';
import IconButton from '../components/IconButton';
import Divider from '../components/Divider';
import Button from '../components/Button';

export default function Home({navigation}) {
  const goHistory = () => navigation.navigate('Transfer');
  const goPay = () => navigation.navigate('Transfer');
  const goTransfer = () => navigation.navigate('Transfer');

  return (
    <Container>
      <Card />
      <Row>
        <Row>
          <Label>Saldo: </Label>
          <Value>R$ 100,00</Value>
        </Row>
        <IconButton name="eye" />
      </Row>
      <Divider />
      <Grid>
        <GridColumn>
          <GridRow>
            <CardButton onPress={goHistory}>
              <Icon source={require('../assets/ic-dollar.png')} />
              <Title>Histórico</Title>
            </CardButton>
            <CardButton onPress={goPay}>
              <Icon source={require('../assets/ic-qr-code.png')} />
              <Title>Pagar</Title>
            </CardButton>
          </GridRow>
          <CardButton onPress={goTransfer}>
            <Icon source={require('../assets/ic-repeat.png')} />
            <Title>Transfêrencias</Title>
          </CardButton>
        </GridColumn>
      </Grid>
      <Divider />
      <Button title="SAIR" opacity />
    </Container>
  );
}
