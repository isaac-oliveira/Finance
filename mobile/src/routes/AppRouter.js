import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Historic from '../pages/Historic';
import Payment from '../pages/Payment';
import Transfer from '../pages/Transfer';
import Confirmation from '../pages/Confirmation';

const { Navigator, Screen } = createStackNavigator();

const AppRouter = () => {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="Home" component={Home} />
			<Screen name="Historic" component={Historic} />
			<Screen name="Payment" component={Payment} />
			<Screen name="Transfer" component={Transfer} />
			<Screen name="Confirmation" component={Confirmation} />
		</Navigator>
	);
};

export default AppRouter;
