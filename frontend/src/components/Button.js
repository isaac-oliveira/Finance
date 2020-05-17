import React from 'react';
import Lottie from 'react-lottie';

import { Button } from './styles/Button';

import loadingAnimation from '../animations/loading.json';

export default function ({
  loading = false,
  title,
  color = '#c26246',
  onClick = () => {},
}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  };

  return !loading ? (
    <Button type="button" color={color} onClick={onClick}>
      {title}
    </Button>
  ) : (
    <Lottie width={56} height={50} options={defaultOptions} />
  );
}
