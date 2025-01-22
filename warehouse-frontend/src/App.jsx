// src/App.jsx  
import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Login from './components/auth/Login';  
import Register from './components/auth/Register';  
import DashboardLayout from './components/layouts/DashboardLayout';  
import Dashboard from './components/dashboard/Dashboard'; // Halaman Dashboard  
import CategoryList from './components/categories/CategoryList'; // Daftar kategori  
import CategoryForm from './components/categories/CategoryForm'; // Form tambah/edit kategori  
  
const App = () => {  
  return (  
    <Router>  
      <Routes>  
        {/* Halaman utama */}  
        <Route path="/" element={<Login />} />  
        <Route path="/register" element={<Register />} />  
  
        {/* Halaman Dashboard */}  
        <Route path="/dashboard" element={<DashboardLayout />}>  
          <Route index element={<Dashboard />} /> {/* Halaman utama dashboard */}  
        </Route>  
  
        {/* Halaman Kategori tanpa prefiks dashboard */}  
        <Route path="/categories" element={<DashboardLayout />}>  
          <Route index element={<CategoryList />} /> {/* Daftar kategori */}  
        </Route>  
  
        {/* Halaman Form Kategori */}  
        <Route path="/categories/form" element={<DashboardLayout />}>  
          <Route index element={<CategoryForm />} /> {/* Form tambah/edit kategori */}  
        </Route>  
      </Routes>  
    </Router>  
  );  
};  
  
export default App;  
