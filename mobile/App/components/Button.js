import React from 'react';
import {Container, Title} from './styles/Button';

export default function Button({
  title = 'Button',
  inverted = false,
  opacity = false,
  onPress,
}) {
  return (
    <Container inverted={inverted} opacity={opacity} onPress={onPress}>
      <Title inverted={inverted} opacity={opacity}>
        {title}
      </Title>
    </Container>
  );
}
