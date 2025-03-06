import Link from "next/link";
import { Explore, Home, Leaderboard, Person2 } from "@mui/icons-material";

function BottomNavigation() {
  return (
    <div className="fixed sm:hidden bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <Link
          href="/"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <Home color="primary" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Home
          </span>
        </Link>
        <Link
          href="/explore"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <Explore color="primary" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Explore
          </span>
        </Link>
        <Link
          href="/board"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <Leaderboard color="primary" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Leaderboard
          </span>
        </Link>
        <Link
          href="/profile"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <Person2 color="primary" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Profile
          </span>
        </Link>
      </div>
    </div>
  );
}

export default BottomNavigation;
