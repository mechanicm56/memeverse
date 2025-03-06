"use client"

import { useMostLikedMemes } from "@/api/meme.services";
import { Loading } from "@/components/loading";
import MemeDisplay from "@/components/Meme";
import NoDataFound from "@/components/NoDataFound";
import { MemeType } from "@/types/meme";
import React, { useMemo } from "react";

function MostLikedMemes() {
  const { data, isLoading, isError } = useMostLikedMemes();
  const MOST_LIKED_MEMES = useMemo(() => {
    if (!isLoading && !isError && data) {
      return data?.memes;
    }
    return [];
  }, [data, isLoading, isError]);

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return "Something Went Wrong!"
  }

  if (MOST_LIKED_MEMES?.length <= 0) {
    return <NoDataFound />
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-9 place-items-center gap-4">
      {MOST_LIKED_MEMES.map((meme: MemeType) => (
        <div className="col-span-3" key={meme._id}>
          <MemeDisplay meme={meme} userAvatar={undefined} userName={meme?.name} src={meme.url} />
        </div>
      ))}
    </div>
  );
}

export default React.memo(MostLikedMemes);
