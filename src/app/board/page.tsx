import { Metadata } from "next";
import MostLikedMemes from "./MostLikedMemes";
import UserRatings from "./UserRatings";

export const metadata: Metadata = {
  title: "Board | Memeverse",
  description: "Leaderboard for memes and user ratings",
};

function BoardPage() {
  return (
    <div className="block px-2 py-4">
      <h1>Leaderboard</h1>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-y-4 gap-4">
        <div className="col-span-3">
          <h2>Most Liked Memes</h2>
          <MostLikedMemes />
        </div>
        <div className="col-span-1">
            <h2>User Ranking</h2>
            <br />
            <div className="flex flex-col space-y-4">
                <UserRatings />
            </div>
        </div>
      </div>
    </div>
  );
}

export default BoardPage;
