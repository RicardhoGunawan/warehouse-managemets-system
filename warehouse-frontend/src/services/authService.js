// services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

const register = async (formData) => {
  const response = await axios.post(`${API_URL}/register`, formData);
  return response.data;
};

export default {
  login,
  register,
};
