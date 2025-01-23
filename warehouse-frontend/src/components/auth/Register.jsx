// src/components/auth/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconUser, IconLock, IconUserCircle } from '@tabler/icons-react';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const navigate = useNavigate();
  const { loading, error, success, register } = useAuth();
  const [form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    role: 'user' // Default role
  });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    
    // Username validation
    if (!form.username) {
      errors.username = 'Username is required';
    } else if (form.username.length < 3) {
      errors.username = 'Username must be at least 3 characters';
    }

    // Password validation
    if (!form.password) {
      errors.password = 'Password is required';
    } else if (form.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    // Confirm password validation
    if (!form.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (form.password !== form.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    // Role validation
    if (!form.role) {
      errors.role = 'Role is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      // Remove confirmPassword before sending to backend
      const { confirmPassword, ...registrationData } = form;
      const response = await register(registrationData);
      
      if (response) {
        // Show success message
        setTimeout(() => {
          navigate('/'); // Redirect to login page after successful registration
        }, 2000);
      }
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-700 text-center">Register</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4" role="alert">
            <span className="block sm:inline">Registration successful! Redirecting to login...</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <IconUser size={20} color="gray" />
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                className="w-full ml-2 px-4 py-2 bg-transparent border-none outline-none text-gray-700"
                placeholder="Username"
              />
            </div>
            {formErrors.username && (
              <p className="text-red-500 text-sm mt-1">{formErrors.username}</p>
            )}
          </div>

          <div>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <IconLock size={20} color="gray" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full ml-2 px-4 py-2 bg-transparent border-none outline-none text-gray-700"
                placeholder="Password"
              />
            </div>
            {formErrors.password && (
              <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
            )}
          </div>

          <div>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <IconLock size={20} color="gray" />
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full ml-2 px-4 py-2 bg-transparent border-none outline-none text-gray-700"
                placeholder="Confirm Password"
              />
            </div>
            {formErrors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{formErrors.confirmPassword}</p>
            )}
          </div>

          <div>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <IconUserCircle size={20} color="gray" />
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full ml-2 px-4 py-2 bg-transparent border-none outline-none text-gray-700"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            {formErrors.role && (
              <p className="text-red-500 text-sm mt-1">{formErrors.role}</p>
            )}
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
                <span>Registering...</span>
              </div>
            ) : (
              'Register'
            )}
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <a href="/" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;