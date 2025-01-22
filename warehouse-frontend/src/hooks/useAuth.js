// src/hooks/useAuth.js
import { useState } from 'react';
import axios from 'axios';

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
      const response = await axios.post('http://localhost:3000/api/auth/login', { username, password });
      setLoading(false);
      setSuccess(true);
      localStorage.setItem('token', response.data.token); // Simpan token
      return response.data; // Mengembalikan data jika login berhasil
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  // Fungsi untuk register
  const register = async (form) => {
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', form);
      setLoading(false);
      setSuccess(true);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return { loading, error, success, login, register };
};

export default useAuth;
