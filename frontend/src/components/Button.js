import React from 'react';

import { Button } from './styles/Button';

export default function ({ title, color = '#c26246', onClick = () => {} }) {
  return (
    <Button type="button" color={color} onClick={onClick}>
      {title}
    </Button>
  );
}
