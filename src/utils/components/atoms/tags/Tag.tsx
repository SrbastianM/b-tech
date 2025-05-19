import { FC } from 'react';

export interface TagProps {
  tagName?: 'web' | 'mobile' | 'backend';
}

const Tag: FC<TagProps> = ({ tagName }) => {
  const backgroundColor =
    tagName === 'web'
      ? 'bg-violet-100'
      : tagName === 'mobile'
        ? 'bg-blue-100'
        : tagName === 'backend'
          ? 'bg-pink-100'
          : 'bg-white';
  const textColor =
    tagName === 'web'
      ? 'text-violet-500'
      : tagName === 'mobile'
        ? 'text-blue-500'
        : tagName === 'backend'
          ? 'text-pink-500'
          : 'bg-white';
  return (
    <button
      className={` ${backgroundColor} ${textColor} hover:bg-sky-700 rounded-3xl h-7 w-20 md:h-10 md:w-30 md:text-2xl lg:h-7 lg:w-20 lg:text-sm`}
    >
      {tagName}
    </button>
  );
};

export default Tag;
