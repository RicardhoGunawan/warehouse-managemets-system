// src/components/layouts/Sidebar.jsx  
import React from 'react';      
import { Link, useLocation } from 'react-router-dom';      
import {       
  LayoutDashboard,       
  Box,
  Map,       
  ShoppingBag,       
  ClipboardList,      
  Settings,      
  Users,      
  BarChart,      
  Truck,      
  RotateCcw      
} from 'lucide-react';      
      
const Sidebar = () => {      
  const location = useLocation();      
        
  const menuItems = [      
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },      
    { icon: Box, label: 'Categories', path: '/categories' },    
    { icon: Map, label: 'Locations', path: '/locations' },    
    { icon: ShoppingBag, label: 'Products', path: '/products' },      
    { icon: ClipboardList, label: 'Orders', path: '/orders' },      
    { icon: Truck, label: 'Shipments', path: '/shipments' },      
    { icon: RotateCcw, label: 'Returns', path: '/returns' },      
    { icon: Users, label: 'Customers', path: '/customers' },      
    { icon: BarChart, label: 'Reports', path: '/reports' },      
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];      
      
  return (      
    <aside className="hidden lg:flex lg:flex-shrink-0">      
      <div className="w-64 flex flex-col">      
        <div className="flex flex-col h-0 flex-1 bg-gray-800">      
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">      
            <h1 className="text-xl font-bold text-white">Warehouse</h1>      
          </div>      
          <div className="flex-1 flex flex-col overflow-y-auto">      
            <nav className="flex-1 px-2 py-4 space-y-1">      
              {menuItems.map((item) => {      
                const Icon = item.icon;      
                const isActive = location.pathname === item.path;      
                      
                return (      
                  <Link      
                    key={item.path}      
                    to={item.path}      
                    className={`${      
                      isActive      
                        ? 'bg-gray-900 text-white'      
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'      
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}      
                  >      
                    <Icon className="mr-3 h-5 w-5 flex-shrink-0" />      
                    {item.label}      
                  </Link>      
                );      
              })}      
            </nav>      
          </div>      
        </div>      
      </div>      
    </aside>      
  );      
};      
      
export default Sidebar;      
