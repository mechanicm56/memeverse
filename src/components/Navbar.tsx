"use client";
// import { useAuth } from "@/context/AuthUserContext";
import Image from "next/image";
import { useState } from "react";
import ThemeToggler from "./ThemeToggler";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { MenuOutlined, SearchOutlined } from "@mui/icons-material";
import Dropdown from "./Dropdown";

function Navbar({ toggleSidebar }: { toggleSidebar?: () => void }) {
  // const { user, logout } = useAuth();
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      <header className="fixed w-full bg-white dark:bg-gray-900 py-2 z-10">
        <div className="mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          {openSearch ? (
            <button
              onClick={() => setOpenSearch(false)}
              className={`icon-button`}
            >
              <ArrowBackRoundedIcon />
            </button>
          ) : (
            <div className="flex space-x-3 items-center">
              <button onClick={toggleSidebar} className="icon-button hidden sm:block z-40">
                <MenuOutlined />
              </button>
              <div className="flex items-center space-x-2">
                <Image
                  width={60}
                  height={40}
                  src=""
                  alt="YouTube Logo"
                  className="w-10 h-10"
                />
                <span className="text-xl font-bold text-red-500">
                  MemeVerse
                </span>
              </div>
            </div>
          )}

          {/* Search Bar */}
          <div
            className={`${
              openSearch ? "flex" : "hidden sm:flex"
            } justify-center w-full p-1`}
          >
            <div className="relative w-full max-w-md">
              <input
                type="text"
                className="w-full p-2 pl-10 pr-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 transition-all"
                placeholder="Search Memes..."
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 0l6 6"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Navigation Links and Icons */}
          {!openSearch && (
            <div className="flex items-center space-x-4">
              <button
                className="icon-button block sm:hidden"
                onClick={() => setOpenSearch(true)}
              >
                <SearchOutlined />
              </button>

              <ThemeToggler />

              {/* Profile Icon */}
              <Dropdown
                placement="bottom-right"
                className="p-2 rounded-full"
                items={[
                  {
                    name: "Sign In",
                    icon: <></>,
                    link: ""
                  },
                  {
                    name: "Profile",
                    icon: <></>,
                    link: "/profile",
                  },
                  {
                    name: 'Logout',
                    icon: <></>,
                  }
                ]}
              >
                <Image src="" alt="Profile" className="w-8 h-8 rounded-full" />
              </Dropdown>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
