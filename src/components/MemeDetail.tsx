"use client";

import { useState } from "react";
import CommentSection from "./CommentSection";
import LikeDislike from "./like-dislike";

type Comment = {
  id: number;
  text: string;
};

type ImageCardProps = {
  imageUrl?: string;
  caption?: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, caption }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  // Handle like/dislike toggle
  const handleLikeToggle = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  // Handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), text: newComment.trim() }]);
      setNewComment("");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="col-span-3">
        {/* Image and Caption */}
        <div className="relative">
          <img
            src={imageUrl}
            alt="Image caption"
            className="w-full h-90 object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-3 w-full">
            <p className="text-white text-lg font-semibold">{caption}</p>
          </div>
        </div>

        {/* Likes, Comments, and Share Section */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Like/Dislike Button with Animation */}
            <LikeDislike />

            {/* Share Button */}
            <button className="bg-gray-200 text-grey-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white h-9 rounded-full px-4 cursor-pointer">
              🔗 Share
            </button>
          </div>
        </div>

        {/* Comment Section */}
        <CommentSection />
      </div>
      <div className="col-span-1 bg-gray-900 rounded-md p-4">Similar Memes</div>
    </div>
  );
};

export default ImageCard;
