// services/authService.js  
import api from './api'; // Import the Axios instance  
  
const API_URL = '/api/auth'; // Use relative URL since baseURL is set in api.js  
  
const getAuthToken = () => {  
  return localStorage.getItem('token'); // Retrieve the token from local storage  
};  
  
const login = async (username, password) => {
  try {
    const response = await api.post(`${API_URL}/login`, { username, password });
    if (response.data && response.data.token) {
      return response.data;
    }
    throw new Error('Invalid response format');
  } catch (error) {
    throw error;
  }
};  
  
const register = async (formData) => {  
  const response = await api.post(`${API_URL}/register`, formData);  
  return response.data;  
};  
  
export default {  
  login,  
  register,  
};  
