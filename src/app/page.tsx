import PopularMemes from "@/components/PopularMemes";
import { Metadata } from "next";
// import Image from "next/image";

export const metadata: Metadata = {
  title: "Memeverse",
  description: "Home Page",
};

export default function Home() {
  return (
    <>
      <PopularMemes />
    </>
  );
}
