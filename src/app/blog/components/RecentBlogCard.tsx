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
  const topThree = cards.slice(0, 3);

  return (
    <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2">
      <div className="lg:col-span-2">
        {topThree[0] && (
          <div className="flex flex-col gap-4">
            <img
              className="w-full h-64 md:h-80 object-cover rounded-md"
              src={topThree[0].image}
              alt="Blog post featured"
            />
            <Label
              className="text-sm text-violet-500 md:text-2xl lg:text-lg"
              text={topThree[0].date}
            />
            <div className="flex items-center justify-between">
              <h2 className="md:text-4xl text-3xl font-bold text-black dark:text-white lg:text-2xl">
                {topThree[0].title}
              </h2>
              <svg
                className="md:w-10 md:h-10 w-5 h-5 text-gray-500 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
              </svg>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-3xl lg:text-lg">
              {topThree[0].description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {topThree[0].tags?.map((tag, idx) => <Tag {...tag} key={idx} />)}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-8 lg:col-span-2">
        {topThree.slice(1, 3).map((card, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row lg:flex-row gap-6"
          >
            <div className="md:w-1/2 lg:w-1/3">
              <img
                className="w-full h-52 object-cover rounded-lg"
                src={card.image}
                alt={`Blog post ${index + 1}`}
              />
            </div>
            <div className="flex flex-col justify-between md:w-1/2 lg:w-2/3">
              <Label
                className="mb-2 text-sm text-violet-500 md:text-lg lg:text-lg"
                text={card.date}
              />
              <div className="flex flex-row space-x-3 items-start">
                <h3 className="text-3xl md:text-2xl font-semibold mb-2 lg:text-2xl">
                  {card.title}
                </h3>
                <div className="flex items-center md:invisible lg:visible">
                  <svg
                    className="w-5 h-5 fill-current text-gray-500 dark:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 md:md lg:text-lg">
                {card.description}
              </p>
              <div className="flex flex-wrap gap-2 md:invisible">
                {card.tags?.map((tag, idx) => <Tag {...tag} key={idx} />)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogCard;
