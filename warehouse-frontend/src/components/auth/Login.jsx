import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconUser, IconLock } from '@tabler/icons-react'; // Mengimpor ikon dari Tabler
import useAuth from '../../hooks/useAuth'; // Mengimpor hook login

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State untuk loading
  const navigate = useNavigate();
  const { login } = useAuth(); // Menggunakan hook login dari useAuth.js

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true); // Set loading menjadi true

    try {
      await login(username, password); // Menggunakan service login
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false); // Set loading menjadi false setelah proses selesai
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-700 text-center">Login</h2>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
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
            className={`w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
            }`}
            disabled={loading} // Menonaktifkan tombol saat loading
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
