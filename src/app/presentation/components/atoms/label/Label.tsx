import { FC } from 'react';
import { LabelProps } from './LabelProps';

const Label: FC<LabelProps> = ({ text, className, color, size }) => {
  return <span className={`${color}, ${size} ${className}`}>{text}</span>;
};

export default Label;
