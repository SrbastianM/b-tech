import { NavItemProps } from '@/utils/components/molecules/nav-item/NavItemProps';

const fontLight = 'light: text-black';
const darkMode = 'dark:text-white';
const mediumRes = 'md:text-lg';

export const navItems: NavItemProps[] = [
  {
    label: {
      text: 'Blog',
      className: `${fontLight} ${mediumRes}`,
      size: 'sm',
      color: darkMode,
    },
    href: '/blog',
  },
  {
    label: {
      text: 'Projects',
      className: `${fontLight} ${mediumRes}`,
      size: 'sm',
      color: darkMode,
    },
    href: '/work',
  },
  {
    label: {
      text: 'Login',
      className: `${fontLight} ${mediumRes}`,
      size: 'sm',
      color: darkMode,
    },
    href: '/login',
  },
];
