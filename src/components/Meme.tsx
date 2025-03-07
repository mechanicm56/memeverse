// components/MemeDisplay.tsx
import { MemeType } from "@/types/meme";
import { CommentOutlined, ThumbUpOutlined } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

interface MemeDisplayProps {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  objectFit?: string;
  likes?: number;
  comments?: number;
  userAvatar?: string;
  userName?: string;
  meme: MemeType;
}

const MemeDisplay: React.FC<MemeDisplayProps> = ({
  src,
  width = 300,
  height = 320,
  alt = "Meme",
  // objectFit = "cover",
  userAvatar = null,
  userName = "",
  meme,
}) => {
  return (
    <div
      style={{ width, height }}
      className="flex flex-col bg-white dark:bg-black gap-1 my-2 border border-gray-200 dark:border-gray-600 rounded-lg"
    >
      <Link key={meme._id} href={`/meme/${meme._id}`}>
        <div
          style={{ objectFit: 'cover' }}
          className="flex flex-col items-center justify-center transition-all duration-300 p-2 rounded-lg ease-in-out relative"
        >
          <Image
            src={src}
            className="w-full rounded-xl"
            alt={alt}
            width={width}
            height={height}
            style={{ width: width - 45, height: height - 45 }}
            loading="lazy"
          />

          {/* User Information Caption */}
          {userAvatar && userName && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent rounded-b-xl text-white flex items-center gap-2">
              <Image
                src={userAvatar}
                alt={userName || "User Avatar"}
                width={30}
                height={30}
                className="rounded-full"
              />
              <span className="font-semibold">{userName}</span>
            </div>
          )}
        </div>
      </Link>

      {/* Likes and Comments section */}
      <div className="flex items-center rounded-full shadow-sm dark:bg-gray-800 gap-2 pt-2 pb-2 px-3 bg-gray-100 text-sm text-gray-500">
        <span className="flex items-center gap-1 rounded-full px-3 py-1 space-x-2">
          <ThumbUpOutlined fontSize="small" />
          <span className="block">{meme?.likes}{" likes"}</span>
        </span>
        <span className="flex items-center gap-1 rounded-full px-3 py-1 space-x-2">
          <CommentOutlined fontSize="small" />
          <span className="block">{meme?.comments?.length ?? 0}{" comments"}</span>
        </span>
      </div>
    </div>
  );
};

export default MemeDisplay;
