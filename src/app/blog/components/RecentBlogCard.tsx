import Label from '@/components/atoms/label/Label';
import Tag, { TagProps } from '@/components/atoms/tags/Tag';
import { FC } from 'react';

export interface RecentBlogCardProps {
  tags: TagProps[];
  image: string;
  date?: string;
  title?: string;
  description?: string;
}

type Card = {
  cards: RecentBlogCardProps[];
};

const RecentBlogCard: FC<Card> = ({ cards }) => {
  return (
    <div className="flex flex-col gap-12">
      {cards.map((card, index) => {
        if (index === 0) {
          return (
            <div key={index} className="flex flex-col gap-4">
              <img
                className="w-full h-64 md:h-80 object-cover rounded-md "
                src={card.image}
                alt={`Blog post ${index}`}
              />
              <Label
                className="text-sm text-violet-500 md:text-2xl"
                text={card.date}
              />
              <div className="flex items-center justify-between">
                <h2 className="md:text-4xl text-3xl font-bold text-black dark:text-white">
                  {card.title}
                </h2>
                <svg
                  className="md:w-10 md:h-10 w-5 h-5 text-gray-500 dark:text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                </svg>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-3xl">
                {card.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {card.tags?.map((tag, idx) => <Tag {...tag} key={idx} />)}
              </div>
            </div>
          );
        }
        return (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 md:items-start"
          >
            <div className="md:w-1/2">
              <img
                className="w-3xl h-100 object-cover rounded-lg"
                src={card.image}
                alt={`Blog post ${index}`}
              />
            </div>
            <div className="flex flex-col justify-between md:w-1/2">
              <Label
                className="mb-2 text-sm text-violet-500 md:text-2xl"
                text={card.date}
              />
              <div className="flex flex-row space-x-3 items-start hover:text-white">
                <h3 className="text-3xl md:text-4xl font-semibold mb-2">
                  {card.title}
                </h3>
                <div className="flex items-center md:invisible">
                  <svg
                    className="w-5 h-5 fill-current text-gray-500 dark:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 md:text-3xl">
                {card.description}
              </p>
              <div className="flex flex-wrap gap-2 md:invisible">
                {card.tags?.map((tag, idx) => <Tag {...tag} key={idx} />)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentBlogCard;
