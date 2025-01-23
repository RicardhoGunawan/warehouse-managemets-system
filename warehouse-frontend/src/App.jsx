import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import DashboardLayout from './components/layouts/DashboardLayout';
import Dashboard from './components/dashboard/Dashboard';
import CategoryList from './components/categories/CategoryList';
import CategoryForm from './components/categories/CategoryForm';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Halaman utama */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Halaman Dashboard */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
          </Route>

          {/* Halaman Kategori tanpa prefiks dashboard */}
          <Route path="/categories" element={<DashboardLayout />}>
            <Route index element={<CategoryList />} />
          </Route>

          {/* Halaman Form Kategori */}
          <Route path="/categories/form" element={<DashboardLayout />}>
            <Route index element={<CategoryForm />} />
          </Route>
        </Routes>
      </Router>

      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;