import React from 'react';

import { Input } from './styles/Input';

export default function ({ width, placeholder, onChangeText = () => {} }) {
  return (
    <Input
      width={width}
      placeholder={placeholder}
      onChange={({ target }) => onChangeText(target.value)}
    />
  );
}
