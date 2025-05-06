import { FC } from 'react';
import { TitleProps } from './TitleProps';

const Title: FC<TitleProps> = ({ className, text, type, fontSize, color }) => {
  return (
    <h1 className={`${className} ${type} ${fontSize} ${color}`}>{text}</h1>
  );
};

export default Title;
