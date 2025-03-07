/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Formik } from "formik";
import React, { ChangeEventHandler, ReactNode, useMemo, useState } from "react";
import { CloseOutlined, EditOutlined, Email } from "@mui/icons-material";
import Image from "next/image";
import * as Yup from "yup";
import Button from "@/components/Button";
import { toast } from "react-toastify";
import { updateProfile } from "@/api/meme.services";
import { useAuth } from "@/context/AuthUserContext";
import { useProfile } from "@/api/user.services";
import { Loading } from "@/components/loading";
import { InvalidateQueryFilters, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

function ProfileForm() {
  const { user } = useAuth();
  const router = useRouter();
  if (!user) {
    router.replace("/");
  }

  const cache = useQueryClient();
  // State to toggle edit mode and store input values
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState("/profile.png");

  const { data, isLoading, isError } = useProfile(user?.user?.email);

  const PROFILE = useMemo(() => {
    if (!isLoading && !isError) {
      return data;
    }
    return null;
  }, [data, isLoading, isError]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Formik
      initialValues={{
        avatar: PROFILE?.avatar ?? null,
        name: PROFILE?.name ?? "",
        bio: PROFILE?.bio ?? "",
      }}
      validationSchema={Yup.object().shape({
        avatar: Yup.mixed().required("Avatar is required"),
        name: Yup.string().required("Name is required"),
        bio: Yup.string().required("Bio is required"),
      })}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        return toast.promise(updateProfile(user?.user?._id, values), {
          pending: "Updating Profile...",
          success: {
            render({ data }) {
              resetForm();
              cache.invalidateQueries("profile" as InvalidateQueryFilters);
              return data?.message;
            },
          },
          error: {
            render() {
              return "Something Went Wrong!!";
            },
          },
        });
      }}
    >
      {({ handleSubmit, handleChange, setFieldValue, values, errors }) => {
        // Handle the file input change (for profile image upload)
        const handleImageUpload = (e: { target: { files: any[] } }) => {
          const file = e.target.files[0];
          if (file) {
            setProfileImage(URL.createObjectURL(file)); // Temporarily show the image before uploading it to a server
            const reader = new FileReader();
            // When the file is read successfully
            reader.onloadend = () => {
              setFieldValue("avatar", reader.result); // Store the Base64 string
            };
            // Read the file as a data URL (base64)
            reader.readAsDataURL(file);
          }
        };
        return (
          <form noValidate onSubmit={handleSubmit}>
            <div className="flex justify-center items-center p-6 bg-gray-50 dark:bg-gray-900">
              <div className="max-w-6xl w-full px-6 py-8 shadow-sm bg-white dark:bg-gray-800 rounded-lg relative">
                <div className="flex flex-col md:flex-row items-center">
                  {/* Profile Image */}
                  <input
                    hidden
                    aria-hidden="true"
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/*"
                    onChange={
                      handleImageUpload as unknown as ChangeEventHandler
                    }
                    className="cursor-pointer"
                  />
                  <div
                    style={{ minWidth: 250 }}
                    className="flex flex-col space-y-4 items-center justify-center"
                  >
                    <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 mb-4 md:mb-0">
                      <label className="cursor-pointer" htmlFor="avatar">
                        <Image
                          src={values.avatar ?? profileImage}
                          alt="Profile"
                          width={128}
                          height={128}
                          className="object-cover"
                        />
                      </label>
                    </div>
                    <span className="text-red-800">
                      {errors.avatar as ReactNode}
                    </span>
                  </div>

                  {/* Profile Details */}
                  <div className="md:ml-6 pt-5 text-center md:text-left">
                    <div className="flex absolute right-0 top-0 justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setIsEditing((prev) => !prev)}
                        className="px-1 pb-1 m-3 cursor-pointer rounded-md transition duration-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        {isEditing ? (
                          <CloseOutlined fontSize="small" />
                        ) : (
                          <EditOutlined fontSize="small" />
                        )}
                      </button>
                    </div>

                    {isEditing ? (
                      <>
                        {/* Editable Name */}
                        <input
                          type="text"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className="text-gray-800 p-2 w-full border border-gray-300 dark:text-gray-400 dark:border-gray-600 ring-0 rounded-md"
                        />
                        <span className="text-red-800">
                          {errors.name as ReactNode}
                        </span>
                        {/* Editable Bio */}
                        <textarea
                          name="bio"
                          value={values.bio}
                          onChange={handleChange}
                          placeholder="Enter your bio"
                          className="mt-4 text-gray-600 p-2 w-full border border-gray-300  dark:text-gray-400 dark:border-gray-600 rounded-md"
                          rows={3}
                        />
                        <span className="text-red-800">{`${errors.bio}`}</span>
                        <br />
                        <Button type="submit" className="mt-2">
                          Update
                        </Button>
                      </>
                    ) : (
                      <>
                        {/* Non-editable Name */}
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
                          {PROFILE?.name ?? "Your Name"}
                        </h1>
                        {/* Non-editable Bio */}
                        <p className="text-gray-500 h-30 mt-2">
                          {PROFILE?.bio ?? "Write something about yourself..."}
                        </p>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex flex-col absolute bottom-0 right-0 m-3">
                  <span className="flex items-center space-x-2">
                    <Email fontSize="small" />
                    <span className="block">{PROFILE?.email}</span>
                  </span>
                </div>
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default React.memo(ProfileForm);
