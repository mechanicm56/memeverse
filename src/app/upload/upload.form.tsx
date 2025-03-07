"use client";

import { postMeme } from "@/api/meme.services";
import Button from "@/components/Button";
import ImageDrop from "@/components/ImageDrop";
import Textarea from "@/components/Textarea";
import { useAuth } from "@/context/AuthUserContext";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { memo } from "react";
import { toast } from "react-toastify";

function UploadForm() {
  const { user } = useAuth();
   const router = useRouter();
    if (!user) {
      router.replace("/");
    }
  return (
    <Formik
      initialValues={{
        url: null,
        name: ""
      }}
      onSubmit={(values, { resetForm }) => {
        return toast.promise(postMeme(values), {
            pending: 'Posting...',
            success: {
                render({ data }) {
                    resetForm();
                    return data?.message;
                }
            },
            error: {
                render() {
                    return 'Somwthing Went Wrong!!';
                }
            }
        })
      }}
    >
      {({ handleSubmit, handleChange, isSubmitting, setFieldValue , values, errors }) => {
        return (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            <ImageDrop value={values.url} onChange={(val) => setFieldValue('url', val) } accept="image/gif" />
            <div className="block">
              <p className="mb-2">Caption</p>
              <Textarea placeholder="Write caption here..." name="name" onChange={handleChange} value={values.name} />
              <span className="text-red-800">{errors.name}</span>
            </div>
            <div className="flex space-x-4">
              <Button type="button" variant="secondary">Caption With AI</Button>
              <Button type="submit" loading={isSubmitting}>Upload</Button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default memo(UploadForm);
