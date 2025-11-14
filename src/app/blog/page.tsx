'use client';
import Title from '@/utils/components/atoms/title/Title';
import RecentBlogCard from './components/RecentBlogCard';
import { cardItems } from '@/data/cardItems';
import PaginatedBlogGrid from './components/PaginatedBlogAllCards';
import Paragraph from '@/utils/components/atoms/paragraph/Paragraph';

export default function About() {
  return (
    <main>
      <div className="flex flex-col justify-center border-t-2 border-b-2 p-5 border-gray-300 mt-4">
        <Title text="MeMori" type="bold" fontSize="text-8xl" className="ml-6" />
        <Paragraph
          text="This is a personal blog where I tried to explain my personal thoughts and feelings around the time. If you feel confortable reading me, I really preciate your comments. Enjoy your journey here!! :D"
          type="normal"
          className="mt-6 ml-6"
        />
      </div>
      <div className="flex flex-col p-10">
        <Title
          text="Recent blog posts"
          type="bold"
          fontSize="text-3xl md:text-4xl md:mb-10 md:mt-10"
          className="mb-5"
        />
        <RecentBlogCard cards={cardItems} />
        <Title
          text="All blog posts"
          type="bold"
          fontSize="mt-10 text-3xl md:text-4xl md:mb-10 md:mt-10"
          className="mb-5"
        />
        <PaginatedBlogGrid cards={cardItems} />
      </div>
    </main>
  );
}
