"use client";

import "./index.css";
import { ThumbDown, ThumbDownOutlined } from "@mui/icons-material";

function LikeButton({ liked = false }: { liked: boolean }) {
  return (
    <span className="like_btn">
      <input
        checked={liked}
        hidden
        aria-hidden="true"
        type="checkbox"
        id="check"
      />
      <label htmlFor="check">
        <svg
          className="unchecked"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          width="40"
          height="40"
          stroke="currentColor"
          stroke-width="1.5"
          // fill="currentColor"
        >
          <path d="m17.5,29.71c-.55,0-1.02-.2-1.41-.59-.39-.39-.59-.86-.59-1.41v-10.18c0-.27.05-.52.16-.76.11-.24.25-.45.44-.64l5.43-5.4c.25-.23.55-.38.89-.42.34-.05.67,0,.99.17.32.17.55.4.69.7.14.3.17.61.09.92l-1.12,4.6h5.45c.53,0,1,.2,1.4.6.4.4.6.87.6,1.4v2c0,.12-.01.24-.04.38-.02.13-.06.26-.11.38l-3,7.05c-.15.33-.4.62-.75.85-.35.23-.72.35-1.1.35h-8Zm-6,0c-.55,0-1.02-.2-1.41-.59-.39-.39-.59-.86-.59-1.41v-9c0-.55.2-1.02.59-1.41.39-.39.86-.59,1.41-.59s1.02.2,1.41.59c.39.39.59.86.59,1.41v9c0,.55-.2,1.02-.59,1.41-.39.39-.86.59-1.41.59Z" />
        </svg>
        <svg
          className="checked"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          width="40"
          height="40"
          fill="currentcolor"
        >
          <circle className="circle-1" cx="8.85" cy="7.44" r="1.5" />
          <circle className="circle-2" cx="33.2" cy="33.67" r="1" />
          <circle className="circle-3" cx="32.08" cy="8.25" r=".75" />
          <circle className="circle-3" cx="8.33" cy="35.38" r=".75" />
          <path
            className="flower-1"
            d="m9.1,5.37c-.24.14-.54.06-.68-.18s-.06-.54.18-.68.54-.06.68.18.06.54-.18.68Zm-2.42.32c-.28,0-.5.22-.5.5,0,.28.22.5.5.5s.5-.22.5-.5c0-.28-.22-.5-.5-.5Zm-.43,2.75c-.14.24-.06.54.18.68s.54.06.68-.18.06-.54-.18-.68-.54-.06-.68.18Zm2.17,1.75c.14.24.44.32.68.18s.32-.44.18-.68-.44-.32-.68-.18-.32.44-.18.68Zm2.6-1c.28,0,.5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5Zm.43-2.75c.14-.24.06-.54-.18-.68s-.54-.06-.68.18-.06.54.18.68.54.06.68-.18Z"
          />
          <path
            className="flower-2"
            d="m7.83,33.13c0-.28.22-.5.5-.5s.5.22.5.5c0,.28-.22.5-.5.5s-.5-.22-.5-.5Zm-1.02,1.38c.14-.24.06-.54-.18-.68s-.54-.06-.68.18-.06.54.18.68.54.06.68-.18Zm0,1.75c-.14-.24-.44-.32-.68-.18s-.32.44-.18.68.44.32.68.18.32-.44.18-.68Zm1.52.88c-.28,0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5Zm1.52-.87c-.14.24-.06.54.18.68s.54.06.68-.18.06-.54-.18-.68-.54-.06-.68.18Zm0-1.75c.14.24.44.32.68.18s.32-.44.18-.68-.44-.32-.68-.18-.32.44-.18.68Z"
          />
          <path
            className="flower-3"
            d="m32.7,36.17c0-.28.22-.5.5-.5s.5.22.5.5c0,.28-.22.5-.5.5s-.5-.22-.5-.5Zm3.1-1c.14-.24.06-.54-.18-.68s-.54-.06-.68.18-.06.54.18.68.54.06.68-.18Zm0-3c-.14-.24-.44-.32-.68-.18s-.32.44-.18.68.44.32.68.18.32-.44.18-.68Zm-2.6-1.5c-.28,0-.5.22-.5.5,0,.28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5Zm-2.6,1.5c-.14.24-.06.54.18.68s.54.06.68-.18.06-.54-.18-.68-.54-.06-.68.18Zm0,3c.14.24.44.32.68.18s.32-.44.18-.68-.44-.32-.68-.18-.32.44-.18.68Z"
          />
          <path
            className="flower-2"
            d="m32.58,6c0,.28-.22.5-.5.5s-.5-.22-.5-.5.22-.5.5-.5.5.22.5.5Zm-2.88.87c-.14.24-.06.54.18.68s.54.06.68-.18.06-.54-.18-.68-.54-.06-.68.18Zm0,2.75c.14.24.44.32.68.18s.32-.44.18-.68-.44-.32-.68-.18-.32.44-.18.68Zm2.38,1.38c.28,0,.5-.22.5-.5,0-.28-.22-.5-.5-.5s-.5.22-.5.5c0,.28.22.5.5.5Zm2.38-1.37c.14-.24.06-.54-.18-.68s-.54-.06-.68.18-.06.54.18.68.54.06.68-.18Zm0-2.75c-.14-.24-.44-.32-.68-.18s-.32.44-.18.68.44.32.68.18.32-.44.18-.68Z"
          />
          <line
            className="line line-1"
            x1="33.2"
            y1="33.67"
            x2="37.16"
            y2="37.63"
          />
          <line
            className="line line-4"
            x1="32.08"
            y1="8.25"
            x2="36.74"
            y2="3.59"
          />
          <line className="line line-3" x1="8.73" y1="7.3" x2="4.63" y2="3.2" />
          <line
            className="line line-2"
            x1="8.33"
            y1="35.38"
            x2="5.72"
            y2="37.99"
          />
          <path
            className="line line-2"
            d="m24.47,8.03c-1.32-1.84,1.6-5.11,2.06-2.97.37,1.74-4.2,0-2.68-2.97"
          />
          <path
            className="line line-6"
            d="m27.15,32.66c.75,1.37-2.07,5.62-2.82,3.96-.64-1.42,3.02-1.3,3.76,1.36"
          />
          <line
            className="line line-7"
            x1="33.46"
            y1="29.71"
            x2="37.97"
            y2="29.71"
          />
          <line
            className="line line-5"
            x1="7.56"
            y1="13.99"
            x2="2.91"
            y2="13.99"
          />
          <path
            className="hand"
            d="m17.5,29.71c-.55,0-1.02-.2-1.41-.59-.39-.39-.59-.86-.59-1.41v-10.18c0-.27.05-.52.16-.76.11-.24.25-.45.44-.64l5.43-5.4c.25-.23.55-.38.89-.42.34-.05.67,0,.99.17.32.17.55.4.69.7.14.3.17.61.09.92l-1.12,4.6h5.45c.53,0,1,.2,1.4.6.4.4.6.87.6,1.4v2c0,.12-.01.24-.04.38-.02.13-.06.26-.11.38l-3,7.05c-.15.33-.4.62-.75.85-.35.23-.72.35-1.1.35h-8Zm-6,0c-.55,0-1.02-.2-1.41-.59-.39-.39-.59-.86-.59-1.41v-9c0-.55.2-1.02.59-1.41.39-.39.86-.59,1.41-.59s1.02.2,1.41.59c.39.39.59.86.59,1.41v9c0,.55-.2,1.02-.59,1.41-.39.39-.86.59-1.41.59Z"
          />
        </svg>
      </label>
    </span>
  );
}

function LikeDislike({
  like,
  dislike,
  likes = 0,
  value = "",
}: {
  like: () => void;
  dislike: () => void;
  likes?: number;
  value?: string;
}) {
  return (
    <div
      className="like_dislike h-9 rounded-full bg-gray-200 text-grey-900 dark:bg-gray-800"
      id="like_dislike"
    >
      <div
        className="like cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
        id="like"
        onClick={() => like()}
        data-status="inactive"
      >
        <LikeButton liked={value === "like"} />
        <span className="number text-center" id="number">
          {likes}
        </span>
      </div>
      <span className="divider"></span>
      <div
        className="dislike cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
        id="dislike"
        onClick={() => dislike()}
        data-status="inactive"
      >
        {value === "dislike" ? (
          <ThumbDown fontSize="medium" id="dislike__icon" />
        ) : (
          <ThumbDownOutlined fontSize="medium" id="dislike__icon" />
        )}
      </div>
    </div>
  );
}

export default LikeDislike;
