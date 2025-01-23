// src/components/auth/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconUser, IconLock } from '@tabler/icons-react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error, login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      return; // Prevent empty submission
    }

    try {
      const response = await login(username, password);
      
      // Hanya redirect jika login berhasil dan ada token
      if (response && response.token) {
        navigate('/dashboard');
      }
      // Jika tidak ada token, error message akan ditampilkan oleh useAuth
      
    } catch (err) {
      // Error handling sudah dilakukan di useAuth
      console.error('Login error:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-700 text-center">Login</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="mt-4">
          <div className="mb-4 flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <IconUser size={20} color="gray" />
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full ml-2 px-4 py-2 bg-transparent border-none outline-none text-gray-700"
              placeholder="Username"
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <IconLock size={20} color="gray" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full ml-2 px-4 py-2 bg-transparent border-none outline-none text-gray-700"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center items-center space-x-2">
                <div className="w-4 h-4 border-t-2 border-white border-solid rounded-full animate-spin"></div>
                <span>Loading...</span>
              </div>
            ) : (
              'Login'
            )}
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;