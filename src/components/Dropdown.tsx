"use client";

import { useEffect, useRef, useState } from "react";

export type ItemProps = {
    name?: string
    link?:string
    icon?: React.ReactNode
}
type DropdownProps = {
  className?: string;
  children: React.ReactNode;
  items: ItemProps[];
  onItemSelect?: (item: ItemProps) => void;
  placement?:
    | "bottom-left"
    | "bottom"
    | "bottom-right"
    | "top-left"
    | "top"
    | "top-right";
};

const Dropdown: React.FC<DropdownProps> = ({
  className,
  children,
  items,
  onItemSelect,
  placement = "bottom",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Reference to dropdown
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Reference to button

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Determine position classes based on the placement prop
  const positionClasses = () => {
    switch (placement) {
      case "bottom-left":
        return "origin-bottom-left left-0 mt-2";
      case "bottom":
        return "origin-bottom left-1/2 transform -translate-x-1/2 mt-2";
      case "bottom-right":
        return "origin-bottom-right right-0 mt-2";
      case "top-left":
        return "origin-top-left left-0 mb-2";
      case "top":
        return "origin-top left-1/2 transform -translate-x-1/2 mb-2";
      case "top-right":
        return "origin-top-right right-0 mb-2";
      default:
        return "origin-bottom left-1/2 transform -translate-x-1/2 mt-2";
    }
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button className={className} ref={buttonRef} onClick={toggleDropdown}>
        {children}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`absolute w-48 z-15 rounded-md shadow-lg bg-white ${positionClasses()}`}
        >
          <div className="py-1">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                onClick={() => onItemSelect && onItemSelect(item)} // Handle item click
                className="flex items-center cursor-pointer px-4 py-2 space-x-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
