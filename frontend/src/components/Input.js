import React from 'react';

import { Input } from './styles/Input';

export default function ({
  width,
  placeholder,
  type,
  value,
  onChangeText = () => {},
}) {
  return (
    <Input
      width={width}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={({ target }) => onChangeText(target.value)}
    />
  );
}
