import Explore from "@/components/Explore";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore | Memeverse",
  description: "User Profile",
};

async function ExplorePage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;
  return (
    <div className="block">
      <Explore search={search} />
    </div>
  );
}

export default ExplorePage;
