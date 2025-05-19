'use-client';
import { FC } from 'react';
import { RecentBlogCardProps } from './RecentBlogCard';
import Label from '@/utils/components/atoms/label/Label';
import Tag from '@/utils/components/atoms/tags/Tag';

type PaginateBlogCards = {
  cards: RecentBlogCardProps;
};

const BlogCard: FC<RecentBlogCardProps> = ({
  image,
  date,
  title,
  description,
  tags,
}) => {
  return (
    <div className="flex flex-col gap-4 ">
      <img
        className="w-full h-64 object-cover rounded-md"
        src={image}
        alt={title}
      />
      <Label className="text-sm md:text-2xl text-violet-500" text={date} />
      <h3 className="text-xl md:text-3xl font-bold lg:text-2xl">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-base md:text-2xl lg:text-lg">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags?.map((tag, idx) => <Tag {...tag} key={idx} />)}
      </div>
    </div>
  );
};

export default BlogCard;
