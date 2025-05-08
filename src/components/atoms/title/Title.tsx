import { FC } from 'react';
import { TitleProps } from './TitleProps';

const Title: FC<TitleProps> = ({ className, text, type, fontSize, color }) => {
  const weightClass =
    type === 'bold'
      ? 'font-bold'
      : type === 'lighter'
        ? 'font-light'
        : 'font-normal';
  return (
    <h1 className={`${className} ${weightClass} ${fontSize} ${color}`}>
      {text}
    </h1>
  );
};

export default Title;
