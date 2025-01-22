// src/components/layouts/DashboardLayout.jsx  
import React from 'react';  
import { Outlet, useNavigate } from 'react-router-dom';  
import Sidebar from './Sidebar';  
import Header from './Header';  
  
const DashboardLayout = () => {  
  const navigate = useNavigate();  
  
  const handleLogout = () => {  
    // Hapus token atau data pengguna dari local storage  
    localStorage.removeItem('token');  
    // Arahkan pengguna kembali ke halaman login  
    navigate('/');  
  };  
  
  return (  
    <div className="h-screen flex overflow-hidden bg-gray-50">  
      <Sidebar />  
      <div className="flex-1 flex flex-col overflow-hidden">  
        <Header handleLogout={handleLogout} />  
        <main className="flex-1 relative overflow-y-auto focus:outline-none">  
          <div className="py-6">  
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">  
              <Outlet /> {/* Ini akan merender konten sub-routing */}  
            </div>  
          </div>  
        </main>  
      </div>  
    </div>  
  );  
};  
  
export default DashboardLayout;  
