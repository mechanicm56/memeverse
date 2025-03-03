"use client"
import { getMemes } from "@/api/meme.services";
import { useMemo } from "react";
import type { MemeType } from "@/types/meme";
import MemeDisplay from "./Meme";
import useSWR from "swr";

export default function PopularMemes() {
  const { data, error, isLoading } = useSWR("/api/user", getMemes);
  const POPULAR_MEMES: MemeType[] = useMemo(() => {
    let listOfMemes = [];
    if (!isLoading && !error) {
      listOfMemes = data.data.memes;
    }
    return listOfMemes;
  }, [data, error, isLoading]);
  //   console.log(POPULAR_MEMES);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className="p-2 bg-white dark:bg-gray-900">
      <div className="columns-2 md:columns-4 gap-4 space-y-4">
        {POPULAR_MEMES.map((meme) => (
          <MemeDisplay key={meme.id} src={meme.url} />
        ))}
      </div>
    </div>
  );
}
