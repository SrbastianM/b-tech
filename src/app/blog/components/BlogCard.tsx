import Label from '@/components/atoms/label/Label';
import Tag, { TagProps } from '@/components/atoms/tags/Tag';
import testingImage from '@/utils/images/profile.png';
import { FC } from 'react';

type BlogCardProps = {
  tags: TagProps[];
  image?: string;
  date?: string;
  title?: string;
  description?: string;
};

const BlogCard: FC<BlogCardProps> = ({
  image,
  date,
  title,
  description,
  tags,
}) => {
  return (
    <div className="flex flex-col ">
      <div>
        <img src={testingImage.src} />
      </div>
      <div className="flex flex-col">
        <Label
          className="mt-3.5 mb-4"
          color="dark:text-violet-500"
          text="Sunday, 1 Jan 2023"
        />
        <div className="flex flex-row space-x-3  hover:text-white ...">
          <span className="text-3xl mt-2.5 mb-2.5">UX review presentation</span>
          <div className="flex flex-col justify-center">
            <svg
              className=" size-6 fill-current ..."
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
            </svg>
          </div>
        </div>
        <p className="text-light dark:text-gray-400">
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </p>
        <div className="flex flex-row gap-2 mt-4">
          {tags?.map((tag, index) => <Tag {...tag} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
