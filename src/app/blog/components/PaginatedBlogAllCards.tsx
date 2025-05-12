'use client';

import { FC, useState } from 'react';
import BlogCard from './BlogCard';
import { RecentBlogCardProps } from './RecentBlogCard';

interface PaginatedBlogGridProps {
  cards: RecentBlogCardProps[];
  itemsPerPage?: number;
}

const PaginatedBlogGrid: FC<PaginatedBlogGridProps> = ({
  cards,
  itemsPerPage = 6,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const currentCards = cards.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {currentCards.map((card, index) => (
          <BlogCard key={index} {...card} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 dark:text-gray-500"
          >
            Previous
          </button>
          <span className="self-center text-gray-700 font-medium dark:text-gray-400">
            {currentPage + 1} de {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 dark:text-gray-500"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PaginatedBlogGrid;
