import { Menu } from 'lucide-react';
import { Menu as HeadlessMenu } from '@headlessui/react';
import { useAuth } from '../../hooks/useAuth';

const Header = ({ onMenuClick }) => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm lg:static lg:overflow-y-visible">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex justify-between h-16">
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="-ml-2 p-2 rounded-md text-gray-500 hover:text-gray-600"
              onClick={onMenuClick}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Right side menu */}
          <div className="flex items-center justify-end flex-1">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Profile dropdown */}
              <HeadlessMenu as="div" className="relative ml-3">
                <HeadlessMenu.Button className="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">
                      {user?.name?.charAt(0)}
                    </span>
                  </div>
                </HeadlessMenu.Button>

                <HeadlessMenu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <HeadlessMenu.Item>
                    {({ active }) => (
                      <button
                        className={`
                          ${active ? 'bg-gray-100' : ''}
                          block px-4 py-2 text-sm text-gray-700 w-full text-left
                        `}
                        onClick={() => {/* Add profile action */}}
                      >
                        Your Profile
                      </button>
                    )}
                  </HeadlessMenu.Item>

                  <HeadlessMenu.Item>
                    {({ active }) => (
                      <button
                        className={`
                          ${active ? 'bg-gray-100' : ''}
                          block px-4 py-2 text-sm text-gray-700 w-full text-left
                        `}
                        onClick={() => {/* Add settings action */}}
                      >
                        Settings
                      </button>
                    )}
                  </HeadlessMenu.Item>

                  <HeadlessMenu.Item>
                    {({ active }) => (
                      <button
                        className={`
                          ${active ? 'bg-gray-100' : ''}
                          block px-4 py-2 text-sm text-gray-700 w-full text-left
                        `}
                        onClick={logout}
                      >
                        Sign out
                      </button>
                    )}
                  </HeadlessMenu.Item>
                </HeadlessMenu.Items>
              </HeadlessMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;