import Title from '@/utils/components/atoms/title/Title';
import RecentBlogCard from './components/RecentBlogCard';
import { cardItems } from '@/data/cardItems';
import BlogCard from './components/BlogCard';
import PaginatedBlogGrid from './components/PaginatedBlogAllCards';

export default function About() {
  return (
    <main>
      <div className="flex justify-center border-t-2 border-b-2 p-5 border-gray-300 mt-4">
        <Title text="B-tech" type="bold" fontSize="text-8xl" className="" />
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
