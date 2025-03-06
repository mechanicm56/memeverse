// components/Button.tsx
"use client"

import React, { useState } from 'react';
import './index.css';

type ButtonProps = {
    onClick?: () => void
    loading?: boolean
    children?: React.ReactNode
    icon?: React.ReactNode
    className?: string
    variant?: string
}


const Button = ({ onClick, loading, children, icon, variant = 'primary' ,className = '', ...props }: ButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = async (e: any) => {
    setIsClicked(true);
    if (onClick) {
      await onClick(e);
    }
    setIsClicked(false);
    createRipple(e);
  };

  const createRipple = (e: { currentTarget: any; clientX: number; clientY: number; }) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600); // Remove ripple after 600ms (same as animation duration)
  };

  return (
    <button
      onClick={handleClick}
      className={`relative ${variant === 'primary' ? 'bg-blue-600' : 'bg-gray-700'} cursor-pointer inline-flex items-center justify-center px-6 py-2 text-white font-semibold rounded-full shadow-md overflow-hidden transition-all duration-300 focus:outline-none ${className}`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="4" className="opacity-25" />
          <path
            fill="none"
            strokeWidth="4"
            d="M4 12a8 8 0 1 1 16 0 8 8 0 1 0-16 0"
            className="opacity-75"
          />
        </svg>
      ) : (
        <>
        {icon}
        {children}
        </>
      )}
    </button>
  );
};

export default Button;
