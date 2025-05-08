import { FC } from 'react';
import { LabelProps } from './LabelProps';

const Label: FC<LabelProps> = ({ text, className, color, size, isActive }) => {
  const fontSize =
    size === 'sm'
      ? 'text-sm'
      : size === 'md'
        ? 'text-base'
        : size === 'lg'
          ? 'text-lg'
          : '';
  return (
    <span
      className={`${isActive ? 'text-black' : 'dark:text-white'} ${color}, ${fontSize} ${className}`}
    >
      {text}
    </span>
  );
};

export default Label;
