import React from 'react';

import Routes from './routes';
import {StatusBar, View} from 'react-native';
import Color from './themes/color';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Color.primary} />
      <Routes />
    </>
  );
}
