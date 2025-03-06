// components/CategoryBar.tsx
import React, { useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

interface CategoryBarProps {
  categories: string[];
  onChange?: (category?: string) => void;
}

const Categories: React.FC<CategoryBarProps> = ({ categories, onChange }) => {
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
    <div className="flex w-full space-x-3 scrollbar-hide items-center">
      {/* Left Arrow Button */}
      <button
        onClick={handleLeftClick}
        className="icon-button ml-1 focus:outline-none"
      >
        <KeyboardArrowLeftIcon />
      </button>

      {/* Category Bar (scrollable container) */}
      <div
        ref={categoriesContainerRef}
        className="flex hide-scroll space-x-4 p-2 px-4 overflow-x-auto bg-gray-200 dark:bg-gray-800 rounded-full scroll-smooth scrollbar-hide w-full"
      >
        {categories.map((category, index) => (
          <span
            key={index}
            onClick={() => onChange && onChange(category)}
            className="px-4 py-1 bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-200 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-300 rounded-lg cursor-pointer"
          >
            {category}
          </span>
        ))}
      </div>
      {/* Right Arrow Button */}
      <button
        onClick={handleRightClick}
        className="mr-1 icon-button focus:outline-none"
      >
        <KeyboardArrowRightOutlinedIcon />
      </button>
    </div>
  )
}

export default Categories
