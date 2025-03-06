"use client";

import { useLikedMemes } from "@/api/meme.services";
import { useAuth } from "@/context/AuthUserContext";
import React, { useMemo } from "react";
import { Loading } from "../../components/loading";
import NoDataFound from "../../components/NoDataFound";
import Link from "next/link";
import MemeDisplay from "../../components/Meme";

function LikedMemes() {
  const { user } = useAuth();
  const { data, isLoading, isError } = useLikedMemes(user?.user?._id);
  const LIKED_MEMES = useMemo(() => {
    const listOfMemes: any[] = [];
    if (!isLoading && !isError && data) {
      if (data?.pages?.length > 0) {
        data.pages.forEach((group) => listOfMemes.push(group.memes));
      }
    }
    console.log(listOfMemes);
    return listOfMemes.flat();
  }, [data, isLoading, isError]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) return "";

  if (LIKED_MEMES?.length === 0) {
    return <NoDataFound />;
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 place-items-center gap-4 my-2 py-2">
      {LIKED_MEMES.map((meme) => (
        <div key={meme._id} className="col-span-3">
          <MemeDisplay
            meme={meme}
            src={meme.url}
          />
        </div>
      ))}
    </div>
  );
}

export default React.memo(LikedMemes);
