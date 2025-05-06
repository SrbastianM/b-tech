import { NavItemProps } from '@/app/presentation/components/molecules/nav-item/NavItemProps';

const fontLight = 'light: text-black';

export const navItems: NavItemProps[] = [
  {
    label: {
      text: 'Home',
      className: fontLight,
      size: 'sm',
    },
    href: '/',
  },
  {
    label: {
      text: 'About',
      className: fontLight,
      size: 'sm',
    },
    href: '/about',
  },
  {
    label: {
      text: 'Work',
      className: fontLight,
      size: 'sm',
    },
    href: '/work',
  },
  {
    label: {
      text: 'Contact',
      className: fontLight,
      size: 'sm',
    },
    href: '/contact',
  },
];
