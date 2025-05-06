'use client';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { NavBarProps } from './NavBarProps';
import NavItem from '../../molecules/nav-item/NavItem';

const NavBar: FC<NavBarProps> = ({ items }) => {
  const pathname = usePathname();
  return (
    <div className="w-full">
      <div className="max-w-full mx-auto px-4 py-4 flex items-center justify-center">
        <div className="flex space-x-8">
          {items.map((item, index) => (
            <NavItem key={index} {...item} isActive={pathname === item.href} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
