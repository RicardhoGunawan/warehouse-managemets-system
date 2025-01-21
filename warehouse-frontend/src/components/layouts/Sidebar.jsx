import { useLocation, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  BoxesIcon,
  MapPin,
  ShoppingCart,
  TruckIcon,
  RotateCcw,
  ClipboardList,
  Activity,
  X
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Products', href: '/products', icon: Package },
  { name: 'Categories', href: '/categories', icon: BoxesIcon },
  { name: 'Locations', href: '/locations', icon: MapPin },
  { name: 'Orders', href: '/orders', icon: ShoppingCart },
  { name: 'Shipments', href: '/shipments', icon: TruckIcon },
  { name: 'Returns', href: '/returns', icon: RotateCcw },
  { name: 'Inventory', href: '/inventory', icon: ClipboardList },
  { name: 'Activity Log', href: '/activity-log', icon: Activity },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const { user } = useAuth();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-300 ease-in-out
      `}>
        <div className="h-full flex flex-col">
          {/* Sidebar header */}
          <div className="h-16 flex items-center justify-between px-4 border-b">
            <Link to="/dashboard" className="text-xl font-bold text-gray-900">
              WMS System
            </Link>
            <button 
              onClick={() => setIsOpen(false)}
              className="lg:hidden"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* User info */}
          <div className="p-4 border-b">
            <div className="text-sm font-medium text-gray-900">{user?.name}</div>
            <div className="text-sm text-gray-500">{user?.email}</div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`
                      flex items-center px-2 py-2 text-sm font-medium rounded-md
                      ${isActive(item.href)
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'}
                    `}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;