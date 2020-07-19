import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

export default function Routes() {
  return (
    <NavigationContainer>
      {false ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
}
