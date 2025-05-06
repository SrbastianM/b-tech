import { FC } from 'react';
import { ParagraphProps } from './ParagraphProps';

const Paragraph: FC<ParagraphProps> = ({ type, className, text, fontSize }) => {
  let typeOfFont = '';
  if (type === 'lighter') typeOfFont = 'font-bold';
  if (type === 'bold') typeOfFont = 'font-normal';
  if (type === 'normal') typeOfFont = 'font-light';
  return <p className={`${className} ${typeOfFont} ${fontSize}`}>{text}</p>;
};

export default Paragraph;
