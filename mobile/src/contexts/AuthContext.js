import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import FinanceApi from '../services/api';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [logged, setLogged] = useState(null);
	const [userId, setUserId] = useState(null);

	useEffect(() => {
		AsyncStorage.getItem('@finance/token').then((resultToken) => {
			if (resultToken) {
				AsyncStorage.getItem('@finance/userId').then((resultUserId) => {
					setUserId(JSON.parse(resultUserId));
					setLogged(true);
				});
			} else {
				setLogged(false);
			}
		});
	}, []);

	async function login(email, password) {
		const { ok, data } = await FinanceApi.fetchLogin(email, password);

		if (ok) {
			await AsyncStorage.setItem('@finance/token', data.token);
			await AsyncStorage.setItem(
				'@finance/userId',
				JSON.stringify(data.userId),
			);
			setLogged(true);
			setUserId(data.userId);
		}

		return { ok, data };
	}

	async function register(name, email, password) {
		const { ok, data } = await FinanceApi.fetchRegister(name, email, password);

		if (ok) {
			await AsyncStorage.setItem('@finance/token', data.token);
			await AsyncStorage.setItem(
				'@finance/userId',
				JSON.stringify(data.userId),
			);

			setLogged(true);
			setUserId(data.userId);
		}

		return { ok, data };
	}

	async function logout() {
		setLogged(false);
		await AsyncStorage.clear();
	}

	return (
		<AuthContext.Provider value={{ userId, logged, login, register, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
