'use client';
import { FC, useRef } from 'react';
import { IconProps } from './IconsProps';

const Icon: FC<IconProps> = ({
  icon: IconComponent,
  size = 80,
  color = 'black',
  isActive = false,
}) => {
  const iconRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={iconRef}
      className={`items-center justify-center background-neutral rounded-lg transition-all ${isActive ? 'bg-gray-100' : ''}`}
      style={{ color }}
    >
      <div className="text-4xl mb-2">
        <IconComponent size={size} />
      </div>
    </div>
  );
};

export default Icon;
