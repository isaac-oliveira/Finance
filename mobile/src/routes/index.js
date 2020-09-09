import React from 'react';

import useAuth from '../hooks/useAuth';

import Splash from '../pages/Splash';
import AuthRouter from './AuthRouter';
import AppRouter from './AppRouter';

const Routes = () => {
	const { logged } = useAuth();

	if (logged === null) return <Splash />;

	if (!logged) return <AuthRouter />;

	return <AppRouter />;
};

export default Routes;
