import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Register from '../pages/Register';

const { Navigator, Screen } = createStackNavigator();

const AuthRouter = () => {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="Login" component={Login} />
			<Screen name="Register" component={Register} />
		</Navigator>
	);
};

export default AuthRouter;
