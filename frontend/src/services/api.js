import { create } from 'apisauce';

const api = create({
  baseURL: 'https://br-api-finance.herokuapp.com',
});

api.addAsyncRequestTransform(async (req) => {
  const token = await localStorage.getItem('@Finance:token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
});

export default {
  login: async (login, password) => {
    const response = await api.post('/login', {
      login,
      password,
    });

    return response;
  },
  register: async (name, login, password) => {
    const response = await api.post('/register', {
      name,
      login,
      password,
    });

    return response;
  },
  getUser: async (id) => {
    const response = await api.get(`/user/${id}`);

    return response;
  },
  getHistorics: async () => {
    const response = await api.get('/operations');

    return response;
  },
  withdraw: async (id, value) => {
    const response = await api.put(`/operation/${id}?type=withdraw`, {
      value: parseFloat(value.replace(',', '.')),
    });

    return response;
  },
  deposit: async (id, value) => {
    const response = await api.put(`/operation/${id}?type=deposit`, {
      value: parseFloat(value.replace(',', '.')),
    });

    return response;
  },

  transfer: async (id, agency, account_number, value) => {
    const response = await api.put(`/transfer/${id}`, {
      agency,
      account_number,
      value: parseFloat(value.replace(',', '.')),
    });

    return response;
  },
};
