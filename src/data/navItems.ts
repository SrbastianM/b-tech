import { NavItemProps } from '@/components/molecules/nav-item/NavItemProps';

const fontLight = 'light: text-black';
const darkMode = 'dark:text-white';
const mediumRes = 'md:text-lg'

export const navItems: NavItemProps[] = [
  {
    label: {
      text: 'Home',
      className: `${fontLight} ${mediumRes}`,
      size: 'sm',
      color: darkMode,
    },
    href: '/',
  },
  {
    label: {
      text: 'Blog',
      className: `${fontLight} ${mediumRes}` ,
      size: 'sm',
      color: darkMode,
    },
    href: '/blog',
  },
  {
    label: {
      text: 'Work',
      className: `${fontLight} ${mediumRes}`,
      size: 'sm',
      color: darkMode,
    },
    href: '/work',
  },
  {
    label: {
      text: 'Contact',
      className: `${fontLight} ${mediumRes}`,
      size: 'sm',
      color: darkMode,
    },
    href: '/contact',
  },
];
