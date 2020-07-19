import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Container} from './styles/IconButton';
import Color from '../themes/color';

export default function IconButton({style, name, size = 22, onPress}) {
  return (
    <Container style={style} onPress={onPress}>
      <Icon name={name} size={size} color={Color.icon} />
    </Container>
  );
}
