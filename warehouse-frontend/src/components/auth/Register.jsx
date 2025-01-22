// src/components/auth/Register.jsx
import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import useAuth from '../../hooks/useAuth'; // Mengimpor useAuth

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '', role: '' });
  const { loading, error, success, register } = useAuth(); // Menggunakan hook useAuth

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await register(form);
    if (response && success) {
      alert('Registration successful! Please login.');
    }
  };

  return (
    <div className="register-form max-w-md mx-auto mt-10">
      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">Registration successful! Please login.</p>}
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="role"
          placeholder="Role (e.g., admin, user)"
          value={form.role}
          onChange={handleChange}
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </Button>
      </form>
    </div>
  );
};

export default Register;
