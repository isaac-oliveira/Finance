import React from 'react';
import {
	SafeAreaView,
	KeyboardAvoidingView,
	StatusBar,
	StyleSheet,
} from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './contexts/AuthContext';
import Routes from './routes';
import theme from './themes';

const App = () => {
	return (
		<NavigationContainer>
			<AuthProvider>
				<ThemeProvider theme={theme}>
					<SafeAreaView style={styles.container}>
						<KeyboardAvoidingView style={styles.container} behavior="height">
							<StatusBar
								barStyle="light-content"
								backgroundColor={theme.colors.primary}
							/>
							<Routes />
						</KeyboardAvoidingView>
					</SafeAreaView>
				</ThemeProvider>
			</AuthProvider>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.primary,
	},
});

export default App;
