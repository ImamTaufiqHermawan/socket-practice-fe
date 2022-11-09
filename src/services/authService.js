import API from './api';

const AuthService = {
  login: async function (data) {
    try {
      const response = await API.post('/auth/login', data);
      API.defaults.headers['Authorization'] = `Bearer ${response.token}`;
      return response;
    } catch (err) {
      console.log('Auth service error', err);
      throw err;
    }
  },

  register: async function (data) {
    try {
      console.log(data)
      const response = await API.post('/auth/register', data);
      API.defaults.headers['Authorization'] = `Bearer ${response.token}`;
      return response;
    } catch (err) {
      console.log('Auth service error', err);
      throw err;
    }
  },

  logout: () => {

  }
}

export default AuthService;