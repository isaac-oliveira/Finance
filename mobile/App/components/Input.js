import React from 'react';

import {Container, Icon, TextInput} from './styles/Input';
import Color from '../themes/color';

export default function Input({icon, width, placeholder, secureTextEntry}) {
  return (
    <Container width={width}>
      {icon && <Icon name={icon} color={Color.icon} size={18} />}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Color.textPlaceHolder}
        secureTextEntry={secureTextEntry}
      />
    </Container>
  );
}
