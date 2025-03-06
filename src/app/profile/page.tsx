import LikedMemes from "@/app/profile/LikedMemes";
import ProfileForm from "./profile.form";
import { Metadata } from "next";
import UserMemes from "@/app/profile/UserMemes";

export const metadata: Metadata = {
  title: "Profile | Memeverse",
  description: "User Profile",
};

const ProfilePage = () => {
  return (
    <div className="block">
      <ProfileForm />
      <div className="mt-6">
        <h2>Your's Memes</h2>
        <UserMemes />
        <h2>Liked Memes</h2>
        <LikedMemes />
      </div>
    </div>
  );
};

export default ProfilePage;
