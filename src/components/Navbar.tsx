"use client";
// import { useAuth } from "@/context/AuthUserContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import {
  Login,
  Logout,
  Person2Outlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import Dropdown, { ItemProps } from "./Dropdown";
import { useAuth } from "@/context/AuthUserContext";
import { useDebounce } from "use-debounce";
import { usePathname, useRouter } from "next/navigation";

function Navbar({ toggleSidebar }: { toggleSidebar?: () => void }) {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [searchValue, setSearchValue] = useState<string | null>(null);
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [search] = useDebounce(searchValue, 1000);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/explore') {
      router.push(`/explore?search=${search}`)
    }
  }, [pathname, router, search]);

  let PROFILE_MENU: ItemProps[] = [];

  if (user) {
    PROFILE_MENU = PROFILE_MENU.concat([
      {
        name: "Profile",
        icon: <Person2Outlined fontSize="small" />,
        link: "/profile",
      },
      {
        name: "Logout",
        icon: <Logout fontSize="small" />,
        link: ""
      },
    ]);
  } else {
    PROFILE_MENU.push({
      name: "Sign In",
      icon: <Login fontSize="small" />,
      link: "/signin",
    });
  }

  const handleSearch = (e: { target: { value: string }; }) => {
    const search = e.target.value;
    setSearchValue(search);
  }

  return (
    <>
      <header className="fixed w-full bg-white dark:bg-black z-10">
        <div style={{ height: '60px' }} className="mx-auto flex items-center justify-between px-4">
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
              <button
                onClick={toggleSidebar}
                style={{ minWidth: '45px' }}
                className="icon-button burger-menu cursor-pointer z-40"
              >
                <MenuOutlined />
              </button>
              <div className="flex items-center space-x-2">
                <Image
                  width={250}
                  height={40}
                  src="/logo.png"
                  alt="Memeverse Logo"
                />
                {/* <span className="text-xl font-bold text-gray-900 dark:text-gray-400">
                  MemeVerse
                </span> */}
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
                type="search"
                onChange={handleSearch}
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                onItemSelect={(item) => {
                  if (item.name === 'Logout') {
                    logout();
                  }
                }}
                placement="bottom-right"
                className="p-1 w-10 cursor-pointer hover:bg-gray-200 rounded-full"
                items={PROFILE_MENU}
              >
                <Image width={60} height={60} src={user?.user?.avatar ?? '/profile.png'} alt="Profile" className="rounded-full" />
              </Dropdown>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
