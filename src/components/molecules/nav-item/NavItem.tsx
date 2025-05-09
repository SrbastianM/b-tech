import { FC } from 'react';
import { NavItemProps } from './NavItemProps';
import Link from 'next/link';
import Icon from '../../atoms/icon/Icons';
import Label from '../../atoms/label/Label';

const NavItem: FC<NavItemProps> = ({ href, icon, label, isActive }) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-4 py-2 rounded-sm transition hover:bg-blue-100 
      } ${isActive ? 'bg-indigo-50' : 'text-gray-700'}`}
    >
      {icon && <Icon {...icon} />}
      <Label {...label} isActive={isActive} />
    </Link>
  );
};

export default NavItem;
