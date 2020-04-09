import React from 'react';

import { Input } from './styles/Input';

export default function ({ placeholder, onChangeText = () => {} }) {
  return (
    <Input
      placeholder={placeholder}
      onChange={({ target }) => onChangeText(target.value)}
    />
  );
}
