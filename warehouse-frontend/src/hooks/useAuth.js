// src/hooks/useAuth.js  
import { useState } from 'react';  
import authService from '../services/authService'; // Import the authService  
  
const useAuth = () => {  
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState('');  
  const [success, setSuccess] = useState(false);  
  
  // Fungsi untuk login  
  const login = async (username, password) => {  
    setLoading(true);  
    setError('');  
    setSuccess(false);  
  
    try {  
      const response = await authService.login(username, password); // Use authService  
      setLoading(false);  
      setSuccess(true);  
      localStorage.setItem('token', response.token); // Simpan token  
      return response; // Mengembalikan data jika login berhasil  
    } catch (err) {  
      setLoading(false);  
      setError(err.response?.data?.message || 'Login failed');  
    }  
  };  
  
  // Fungsi untuk register  
  const register = async (formData) => {
    setLoading(true);
    setError('');
    setSuccess(false);
  
    try {
      const response = await authService.register(formData);
      setLoading(false);
      setSuccess(true);
      return response;
    } catch (err) {
      setLoading(false);
      if (err.response) {
        setError(err.response.data?.message || 'Registration failed');
      } else if (err.request) {
        setError('No response from server');
      } else {
        setError('Registration failed');
      }
      return null;
    }
  };  
  
  return { loading, error, success, login, register };  
};  
  
export default useAuth;  
