"use client";

import Link from "next/link";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { memo } from "react";
import * as Yup from "yup";
import { login } from "@/api/auth.services";
import { useAuth } from "@/context/AuthUserContext";
import { useRouter } from "next/navigation";

function Login() {
    const router = useRouter();
    const { setUser } = useAuth();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
            email: Yup.string().email().required('Email is required'),
            password: Yup.string().required("Password is required")
        })}
      onSubmit={(values) => {
        return toast.promise(login(values), {
          pending: "Signing In...",
          success: {
            render({ data }) {
                console.log(data);
                if (data.accessToken) {
                    setUser(data);
                    window.localStorage.setItem("uxairishere", JSON.stringify(data));
                    console.log(
                      "Local strotage data: ",
                      window.localStorage.getItem("uxairishere")
                    );
                    router.replace('/');
                }
                return data?.response?.message;
            }
          },
          error: {
            render({ data: error }) {
                return error?.response?.data?.message ?? data?.message
            }
          }
        });
      }}
    >
      {({ handleSubmit, handleChange , errors, values }) => {
        // something to do
        return (
          <>
            <form onSubmit={handleSubmit}>
              <div>
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Email
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                />
                <span className="text-red-800">{errors.email}</span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                  <div>
                    <a
                      className="text-xs font-display font-semibold text-gray-600 hover:text-gray-800 dark:hover:text-gray-400
                                        cursor-pointer"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
                <span className="text-red-800">{errors.password}</span>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="bg-indigo-500 cursor-pointer text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg"
                >
                  Log In
                </button>
              </div>
            </form>
            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              Don&apos;t have an account ?{" "}
              <Link
                href="/signup"
                className="cursor-pointer text-gray-800 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-500"
              >
                Sign up
              </Link>
            </div>
          </>
        );
      }}
    </Formik>
  );
}

export default memo(Login);
