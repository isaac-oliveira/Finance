import React from 'react';

import {Container, BackButton, Title} from './styles/Header';

export default function Header({title, onBack}) {
  return (
    <Container>
      <BackButton name="arrow-left" size={28} onPress={onBack} />
      <Title>{title}</Title>
    </Container>
  );
}
