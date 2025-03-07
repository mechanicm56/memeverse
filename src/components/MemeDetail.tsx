"use client";

import { useMemo } from "react";
import CommentSection from "./CommentSection";
import LikeDislike from "./like-dislike";
import { MemeType } from "@/types/meme";
import { Share } from "@mui/icons-material";
import { likeMeme, useMeme, useMemes } from "@/api/meme.services";
import { useAuth } from "@/context/AuthUserContext";
import { InvalidateQueryFilters, useQueryClient } from "@tanstack/react-query";
import { Loading } from "./loading";
import MemeDisplay from "./Meme";
import Image from "next/image";

type ImageCardProps = {
  memeId?: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ memeId }) => {
  const { user } = useAuth();
  const cache = useQueryClient();
  const { data, isLoading, isError } = useMeme(memeId);

  // Handle like/dislike toggle
  const handleLikeDislike = async (val?: string) => {
    await likeMeme(memeId, {
      userId: user?.user?._id,
      type: val,
    });
    cache.invalidateQueries(`meme-${memeId}` as InvalidateQueryFilters);
  };

  const meme = useMemo(() => {
    let meme: MemeType | null = null;
    if (!isLoading && !isError && data) {
      // console.log(data);
      meme = data?.meme;
    }
    return meme;
  }, [data, isLoading, isError]);

  const { data: memes, isError: isMemesError, isLoading: isMemesLoading } = useMemes();
  const POPULAR_MEMES: MemeType[] = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const listOfMemes: any[] = [];
    if (!isMemesLoading && !isMemesError && memes) {
      if (memes?.pages?.length > 0) {
        memes.pages.forEach((group) => listOfMemes.push(group.memes));
      }
    }
    return listOfMemes.flat();
  }, [memes, isMemesError, isMemesLoading]);

  if (meme === null || isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="col-span-3">
        {/* Image and Caption */}
        <div className="relative">
          <div>
            <Image
              style={{ objectFit: "contain" }}
              src={meme?.url}
              width={meme?.width ?? 300}
              height={meme?.height ?? 300}
              loading="lazy"
              alt="Image caption"
              className="w-full max-h-100"
            />
          </div>
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-3 w-full">
            <p className="text-white text-lg font-semibold">{meme?.name}</p>
          </div>
        </div>

        {/* Likes, Comments, and Share Section */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Like/Dislike Button with Animation */}
            <LikeDislike
              value={meme.like}
              likes={meme?.likes}
              like={() => handleLikeDislike("like")}
              dislike={() => handleLikeDislike("dislike")}
            />

            {/* Share Button */}
            <button className="flex items-center x-space-2 bg-gray-200 text-grey-900 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 dark:hover:text-white h-9 rounded-full px-4 cursor-pointer">
              <Share fontSize="small" />
              <span className="block ml-2">Share</span>
            </button>
          </div>
        </div>

        {/* Comment Section */}
        <CommentSection
          id={memeId}
          userId={user?.user?._id}
          comments={meme?.comments}
        />
      </div>
      <div className="col-span-3 sm:col-span-1 bg-white dark:bg-gray-900 rounded-md p-4">
        <h2>Similar Memes</h2>
        <div className="flex flex-col space-y-3">
          {POPULAR_MEMES.map((meme) => (
            <div key={meme._id} className="col-span-3">
              <MemeDisplay meme={meme} src={meme?.url ?? null} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
