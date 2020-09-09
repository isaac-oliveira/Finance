import { create } from 'apisauce';
import AsyncStorage from '@react-native-community/async-storage';

const api = create({
	baseURL: 'https://br-api-finance.herokuapp.com',
});

api.addAsyncRequestTransform(async (request) => {
	const token = await AsyncStorage.getItem('@finance/token');
	if (token) request.headers.Authorization = `Bearer ${token}`;
});

const FinanceApi = {
	fetchLogin: async (login, password) => {
		const response = await api.post('/login', {
			login,
			password,
		});

		return response;
	},
	fetchRegister: async (name, login, password) => {
		const response = await api.post('/register', {
			name,
			login,
			password,
		});

		return response;
	},
	fetchGetUser: async (id) => {
		const response = await api.get(`/user/${id}`);

		return response;
	},
	fetchGetHistorics: async () => {
		const response = await api.get('/operations');

		return response;
	},
	fetchWithdraw: async (id, value) => {
		const response = await api.put(`/operation/${id}?type=withdraw`, {
			value: parseFloat(value.replace(',', '.')),
		});

		return response;
	},
	fetchDeposit: async (id, value) => {
		const response = await api.put(`/operation/${id}?type=deposit`, {
			value: parseFloat(value.replace(',', '.')),
		});

		return response;
	},

	fetchTransfer: async (id, agency, account_number, value) => {
		const response = await api.put(`/transfer/${id}`, {
			agency,
			account_number,
			value: parseFloat(value.replace(',', '.')),
		});

		return response;
	},
};

export default FinanceApi;
