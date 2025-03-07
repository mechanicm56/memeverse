import Register from "@/components/Register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Memeverse",
  description: "Create an Account",
};

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full lg:w-1/2 xl:max-w-screen-sm">
        <div className="mt-16 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h1
            className="text-center text-4xl text-gray-600 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
          >
            Sign up
          </h1>
          <div className="mt-12">
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
}
