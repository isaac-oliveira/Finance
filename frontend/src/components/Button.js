import React from 'react';

import { Button } from './styles/Button';

export default function ({ title, onClick = () => {} }) {
  return (
    <Button type="button" onClick={onClick}>
      {title}
    </Button>
  );
}
