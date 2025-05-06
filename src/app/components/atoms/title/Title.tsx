import { FC } from 'react';
import { TitleProps } from './TitleProps';

const Title: FC<TitleProps> = ({ className, text, type }) => {
  return <h1 className={`${className} ${type}`}>{text}</h1>;
};

export default Title;
