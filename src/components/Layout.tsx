"use client";

import Link from "next/link";
import React, { useState } from "react";
import BottomNavigation from "./BottomNavigation";
import Navbar from "./Navbar";
import Categories from "./Categories";
import { usePathname } from "next/navigation";
import {
  ExploreOutlined,
  FilterListOutlined,
  HomeOutlined,
  LeaderboardOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dropdown from "./Dropdown";

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
    link: "/board",
  },
  {
    name: "Upload",
    icon: <UploadOutlined />,
    link: "/upload",
  },
];


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
})

// const persister = createSyncStoragePersister({
//   storage: window.localStorage,
// })

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Sidebar is initially open
  // const [pathname, setPathname] = useState('');
  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex">
          <div
            className={`${
              isOpen ? "w-64" : "w-20"
            } fixed hidden sm:block left-0 top-0 pt-15 h-full text-white transition-all duration-300 ease-in-out overflow-hidden z-0`}
          >
            {/* Sidebar Links */}
            <ul className="space-y-4 mt-6">
              {MenuList.map((item) => (
                <li key={`${item.name}`}>
                  <Link
                    className={`flex ${
                      isOpen
                        ? "space-x-2"
                        : "flex-col text-sm justify-center items-center space-y-2"
                    } p-2 px-4 text-gray-600 hover:bg-gray-200 hover:text-gray-600 dakr:hover:bg-gray-700 rounded`}
                    href={item.link}
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
            className={`flex-1 mt-14 h-full relative ${
              isOpen ? "ml-64" : "sm:ml-20"
            } transition-all duration-300 ease-in-out`}
          >
            <div className="p-2">{children}</div>
          </div>
        </div>
        <BottomNavigation />
      </QueryClientProvider>
    </main>
  );
};

export default Layout;
