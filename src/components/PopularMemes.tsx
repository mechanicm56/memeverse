"use client";

import { useMemes } from "@/api/meme.services";
import { useMemo } from "react";
import type { MemeType } from "@/types/meme";
import MemeDisplay from "./Meme";
import { Loading } from "./loading";
import Link from "next/link";
import NoDataFound from "./NoDataFound";

export default function PopularMemes() {
  const { data, isError, isLoading } = useMemes();
  const POPULAR_MEMES: MemeType[] = useMemo(() => {
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

  if (POPULAR_MEMES?.length <= 0) {
    return <NoDataFound />;
  }
  return (
    <div className="p-2">
      {POPULAR_MEMES?.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 place-items-center h-screen gap-4">
          {POPULAR_MEMES.map((meme) => (
            <div key={meme._id} className="col-span-3">
              <MemeDisplay meme={meme} src={meme?.url ?? null} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
