'use client';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';
import { NavBarProps } from './NavBarProps';
import NavItem from '../../molecules/nav-item/NavItem';
import Label from '../../atoms/label/Label';

const NavBar: FC<NavBarProps> = ({ items }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch('/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setUser(null);
        }
      } catch (err) {
        console.error('Error al verificar sesión:', err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();

    window.addEventListener('authChange', checkAuth);

    return () => {
      window.removeEventListener('authChange', checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.dispatchEvent(new Event('authChange'));
    setUser(null);
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="flex justify-center p-4">
        <p className="text-gray-500 dark:text-gray-300">Cargando...</p>
      </div>
    );
  }

  const visibleItems = user
    ? items.filter((item) => item.label?.text !== 'Login')
    : items;

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Label
        size="lg"
        text="B-tech"
        className="font-bold md:text-4xl lg:text-4xl"
        color="dark:text-white"
      />

      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-menu"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <div
        id="navbar-menu"
        className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto mt-4 md:mt-0`}
      >
        <div className="flex flex-col md:flex-row md:space-x-8 items-center">
          {visibleItems.map((item, index) => (
            <NavItem key={index} {...item} isActive={pathname === item.href} />
          ))}

          {user && (
            <div className="relative ml-4">
              <button
                onClick={() => setIsOpen((prev) => !prev)} // 👈 clic alterna el menú
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A9.969 9.969 0 0112 15c2.21 0 4.236.717 5.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{user.username}</span>
              </button>

              {/* Dropdown con click */}
              {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg dark:bg-gray-800">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      router.push('/profile');
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    Perfil
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      handleLogout();
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
