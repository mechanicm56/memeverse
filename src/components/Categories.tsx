// components/CategoryBar.tsx
import React, { useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

interface CategoryBarProps {
  categories: string[];
}

const Categories: React.FC<CategoryBarProps> = ({ categories }) => {
  const categoriesContainerRef = useRef<HTMLDivElement>(null)

  // Scroll the container to the left
  const handleLeftClick = () => {
    if (categoriesContainerRef.current) {
      categoriesContainerRef.current.scrollBy({
        left: -200, // Adjust this value based on how far you want to scroll
        behavior: 'smooth',
      })
    }
  }

  // Scroll the container to the right
  const handleRightClick = () => {
    if (categoriesContainerRef.current) {
      categoriesContainerRef.current.scrollBy({
        left: 200, // Adjust this value based on how far you want to scroll
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="relative flex w-full items-center px-16">
      {/* Left Arrow Button */}
      <button
        onClick={handleLeftClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 icon-button ml-1 focus:outline-none"
      >
        <KeyboardArrowLeftIcon />
      </button>

      {/* Category Bar (scrollable container) */}
      <div
        ref={categoriesContainerRef}
        className="flex space-x-4 p-2 px-4 overflow-x-auto bg-gray-200 dark:bg-gray-800 rounded-full scroll-smooth scrollbar-hide w-full"
      >
        {categories.map((category, index) => (
          <span
            key={index}
            className="px-4 py-1 bg-gray-300 hover:bg-gray-400 hover:text-gray-200 dark:bg-gray-900 dark:text-gray-400 rounded-lg text-gray-700 cursor-pointer"
          >
            {category}
          </span>
        ))}
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={handleRightClick}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-1 icon-button focus:outline-none"
      >
        <KeyboardArrowRightOutlinedIcon />
      </button>
    </div>
  )
}

export default Categories
