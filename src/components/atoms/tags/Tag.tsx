import { FC } from 'react';

type TagProps = {
  tagName?: 'web' | 'mobile' | 'backend'; // ->
};

const Tag: FC<TagProps> = ({ tagName }) => {
  let backgroundColor =
    tagName === 'web'
      ? 'bg-gray-500'
      : tagName === 'mobile'
        ? 'bg-white'
        : tagName === 'backend'
          ? 'bg-violet-500'
          : 'bg-white';
  return (
    <button className={`${tagName} bg-sky-500 hover:bg-sky-700 rounded-3xl`}>
      Save changes
    </button>
  );
};

export default Tag;
