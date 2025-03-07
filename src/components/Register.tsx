"use client";

import Link from "next/link";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { memo } from "react";
import * as Yup from "yup";
import { register } from "@/api/auth.services";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthUserContext";

function Register() {
  const router = useRouter();
    const { user } = useAuth();
    if (user) {
      router.replace('/');
    }
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
        return toast.promise(register(values), {
          pending: "Signing Up...",
          success: {
            render({ data }) {
                // console.log(data);
                return data?.message
          }},
          error: {
            render() {
                return 'Soemthing Went Wrong!!';
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
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Enter password"
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
                  Sign Up
                </button>
              </div>
            </form>
            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              Already have an account ?{" "}
              <Link
                href="/signin"
                className="cursor-pointer text-gray-800 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-500"
              >
                Sign In
              </Link>
            </div>
          </>
        );
      }}
    </Formik>
  );
}

export default memo(Register);
