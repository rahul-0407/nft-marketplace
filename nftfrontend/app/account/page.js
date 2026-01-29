"use client";

import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Form from "@/components/Form";

const Account = () => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setFileUrl(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxSize: 5000000,
  });

  return (
    <div className="w-full my-24 max-[560px]:my-12 text-(--icons-color)">
      {/* ===== Header ===== */}
      <div
        className="
          w-1/2 mx-auto
          border-b border-[var(--shadow-dark-color)]
          max-[768px]:w-[90%]
        "
      >
        <h1
          className="
            text-6xl font-bold
            max-[768px]:text-3xl
            max-[560px]:text-2xl
          "
        >
          Profile setting
        </h1>

        <p
          className="
            text-lg w-[80%]  pb-2
            max-[768px]:text-base
            max-[768px]:w-full
          "
        >
          You can set preferred display name, create your profile URL and manage
          other personal settings.
        </p>
      </div>

      {/* ===== Content ===== */}
      <div
        className="
          w-1/2 mx-auto
          grid grid-cols-[1fr_5fr]
          gap-12 mt-12
          items-start
          max-[768px]:w-[90%]
          max-[768px]:grid-cols-1
        "
      >
        {/* ===== Image Upload ===== */}
        <div
          {...getRootProps()}
          className="mt-8 cursor-pointer text-center relative"
        >
          <input {...getInputProps()} />

          <img
            src={fileUrl ? URL.createObjectURL(fileUrl) : "./user-1.png"}
            alt="account upload"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />

          <p className="font-bold text-lg mt-2">Change Image</p>
        </div>

        {/* ===== Form ===== */}
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Account;
