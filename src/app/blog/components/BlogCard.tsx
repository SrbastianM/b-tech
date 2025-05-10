import Label from '@/components/atoms/label/Label';
import Tag, { TagProps } from '@/components/atoms/tags/Tag';
import { FC } from 'react';

export interface BlogCardProps {
  tags: TagProps[];
  image: string;
  date?: string;
  title?: string;
  description?: string;
}

type Card = {
  cards: BlogCardProps[];
};

const BlogCard: FC<Card> = ({ cards }) => {
  return (
    <div className="flex flex-col gap-8">
      {cards.map((card, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div>
            <img src={card.image} />
          </div>
          <div className="flex flex-col">
            <Label
              className=" mb-4"
              color="dark:text-violet-500"
              text={card.date}
            />
            <div className="flex flex-row space-x-3  hover:text-white ...">
              <span className="text-3xl mt-2.5 mb-2.5">{card.title}</span>
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
            <p className="text-light dark:text-gray-400">{card.description}</p>
            <div className="flex flex-row gap-2 mt-4">
              {card.tags?.map((tag, index) => <Tag {...tag} key={index} />)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
