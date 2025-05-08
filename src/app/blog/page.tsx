import Title from '@/components/atoms/title/Title';
import BlogCard from './components/BlogCard';

export default function About() {
  return (
    <main>
      {' '}
      <div className="flex justify-center border-t-2 border-b-2 p-5 border-gray-300 mt-4">
        <Title text="B-tech" type="bold" fontSize="text-5xl" className="" />
      </div>
      <div className="flex flex-col p-10">
        <Title
          text="Recent blog posts"
          type="bold"
          fontSize="text-3xl"
          className="mb-5"
        />
        <BlogCard />
      </div>
    </main>
  );
}
