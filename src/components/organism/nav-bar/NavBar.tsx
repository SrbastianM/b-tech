'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { NavBarProps } from './NavBarProps';
import NavItem from '../../molecules/nav-item/NavItem';
import Label from '../../atoms/label/Label';

const NavBar: FC<NavBarProps> = ({ items }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Label
        size="lg"
        text="B-tech"
        className="font-bold"
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
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full md:block md:w-auto mt-4 md:mt-0`}
      >
        <div className="flex flex-col md:flex-row md:space-x-8">
          {items.map((item, index) => (
            <NavItem key={index} {...item} isActive={pathname === item.href} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
