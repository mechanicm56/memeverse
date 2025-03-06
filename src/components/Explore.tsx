"use client";

import { useMemes } from "@/api/meme.services";
import { MemeType } from "@/types/meme";
import React, { useMemo, useState } from "react";
import { Loading } from "./loading";
import MemeDisplay from "./Meme";
import Dropdown from "./Dropdown";
import { FilterListOutlined } from "@mui/icons-material";
import Categories from "./Categories";
import { useDebounce } from "use-debounce";

const sortItems = [
  {
    name: "Likes",
  },
  {
    name: "Date",
  },
  {
    name: "Comments",
  },
];

function Explore({ search }: { search?: string }) {
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [sortBy, setSortBy] = useState<string | undefined>(undefined);
  const [ filterByCategory ] = useDebounce(category, 1000);
  const [ filterBySort ] = useDebounce(sortBy, 1000);
  const { data, isError, isLoading } = useMemes(search, filterByCategory, filterBySort);

  const MEMES: MemeType[] = useMemo(() => {
    const listOfMemes: any[] = [];
    if (!isLoading && !isError && data) {
      if (data?.pages?.length > 0) {
        data.pages.forEach((group) => listOfMemes.push(group.memes));
      }
    }
    return listOfMemes.flat();
  }, [data, isError, isLoading]);

  if (isError) return <div>failed to load</div>;

  if (isLoading) return <Loading />;

  return (
    <>
      <div
        className="block dark:bg-black p-2 transition-all duration-300 ease-in-out"
      >
        <Categories onChange={(cate) => setCategory(cate?.toLowerCase())} categories={["Trending", "New", "Classic", "Random"]} />
      </div>
      <div className="flex justify-start mt-2 pl-5 items-center">
        <Dropdown
          items={sortItems}
          onItemSelect={(itm) => setSortBy(itm.name?.toLowerCase())}
          placement="bottom-left"
          className="py-1 px-3 cursor-pointer rounded-full bg-gray-200 dark:bg-black"
        >
          <FilterListOutlined fontSize="small" /> Sort By {sortBy ? `: ${sortBy}` : ''}
        </Dropdown>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 place-items-center gap-4">
        {MEMES.map((meme: MemeType) => (
          <div className="col-span-3" key={meme._id}>
            <MemeDisplay meme={meme} src={meme.url} />
          </div>
        ))}
      </div>
    </>
  );
}

export default React.memo(Explore);
