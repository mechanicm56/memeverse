"use client";

import Link from "next/link";
import React, { useState } from "react";
import BottomNavigation from "./BottomNavigation";
import Navbar from "./Navbar";
import Categories from "./Categories";
import {
  ExploreOutlined,
  FilterListOutlined,
  HomeOutlined,
  LeaderboardOutlined,
  UploadOutlined,
} from "@mui/icons-material";

const MenuList = [
  {
    name: "Home",
    icon: <HomeOutlined />,
    link: "/",
  },
  {
    name: "Explore",
    icon: <ExploreOutlined />,
    link: "/explore",
  },
  {
    name: "Board",
    icon: <LeaderboardOutlined />,
    link: "board",
  },
  {
    name: "Upload",
    icon: <UploadOutlined />,
    link: "/upload",
  },
];

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar is initially open
  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="bg-white dark:bg-gray-900">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        <div
          className={`${
            isOpen ? "w-64" : "w-20"
          } fixed left-0 top-0 pt-15 h-full bg-white dark:bg-gray-900 text-white transition-all duration-300 ease-in-out overflow-hidden z-0`}
        >
          {/* Sidebar Links */}
          <ul className="space-y-4 mt-6">
            {MenuList.map((item) => (
              <li key={``}>
                <Link
                  className={`flex ${
                    isOpen
                      ? "space-x-2"
                      : "flex-col text-sm justify-center items-center space-y-2"
                  } p-2 hover:bg-gray-700 rounded`}
                  href="/"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Main Content */}
        <div
          className={`flex-1 pt-16 bg-white dark:bg-gray-900 relative ${
            isOpen ? "ml-64" : "ml-20"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="flex fixed bg-white dark:bg-gray-900 w-full p-2 space-x-2">
            <Categories categories={["Trending", "New", "Classic", "Random"]} />
            <button className="icon-button">
              <FilterListOutlined />
            </button>
          </div>
          <div className="p-2 mt-15">{children}</div>
        </div>
      </div>
      <BottomNavigation />
    </main>
  );
};

export default Layout;
