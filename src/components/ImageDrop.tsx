/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { UploadFile } from "@mui/icons-material";
import Image from "next/image";
import { ChangeEventHandler, DragEventHandler, useEffect, useState } from "react";

const ImageDrop = ({
  accept,
  value = null,
  onChange
}: {
  accept?: string;
  value?: string | null | ArrayBuffer
  onChange?: (image: any) => void;
}) => {
  const [image, setImage] = useState<null | string | ArrayBuffer>(value);
  const [dragging, setDragging] = useState(false);

  // Handle drag over event
  const handleDragOver = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setDragging(true);
  };

  // Handle drag leave event
  const handleDragLeave = () => {
    setDragging(false);
  };

  // Handle the drop event and read the dropped image
  const handleDrop = (e: {
    preventDefault: () => void;
    dataTransfer: { files: any[] };
  }) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please drop a valid image file!");
    }
  };

  // Handle file input change (for the traditional file upload)
  const handleFileChange = (e: { target: { files: any[] } }) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file!");
    }
  };

  useEffect(() => {
    setImage(value);
  }, [value])

  useEffect(() => {
    if (image && onChange) {
      onChange(image);
    }
  }, [image])

  return (
    <div className="flex flex-col p-4">
      <div
        className={`w-full max-w-lg p-8 relative border-2 border-dashed rounded-lg text-center ${
          dragging ? "border-blue-500" : "border-gray-400"
        }`}
        onDrop={handleDrop as unknown as DragEventHandler<HTMLDivElement>}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {!image && (
          <>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Drag & Drop an Image
            </h2>
            <p className="text-gray-500 mb-4">
              Or click to upload icon to select an image file
            </p>
          </>
        )}

        <input
          type="file"
          accept={accept}
          onChange={
            handleFileChange as unknown as ChangeEventHandler<HTMLInputElement>
          }
          className="hidden"
          id="file-input"
        />
        <label
          htmlFor="file-input"
          className="cursor-pointer absolute bottom-0 right-0 m-4 text-blue-500 underline"
        >
          <UploadFile />
        </label>

        {!image && (
          <div
            className={`mt-4 ${dragging ? "text-blue-500" : "text-gray-500"}`}
          >
            {dragging ? "Release to drop the image!" : "Drag image here"}
          </div>
        )}

        {image && (
          <div className="mt-6">
            <img
              src={image}
              alt="Preview"
              className="max-w-full max-h-96 object-contain mx-auto rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageDrop;
