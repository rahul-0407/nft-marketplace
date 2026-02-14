"use client";

import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DropZone = ({
  title,
  heading,
  subHeading,
  name,
  website,
  description,
  fileSize,
  category,
  properties,
  setImage,
  royalties,
  uploadToIPFS
}) => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async(acceptedFiles) => {
    const url = await uploadToIPFS(acceptedFiles[0]);
    setFileUrl(url)
    setImage(url)
    console.log(url)
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxSize: 5000000,
  });

  return (
    <div className="w-full my-12">
      <div
        {...getRootProps()}
        className="border-[5px] border-dotted border-(--icons-color) rounded-xl text-center p-4 cursor-pointer"
      >
        <input {...getInputProps()} />
        <p>{title}</p>
        <img src="./upload1.png" width={100} height={100} className="rounded-xl mx-auto" />
        <p>{heading}</p>
        <p>{subHeading}</p>
      </div>

      {fileUrl && (
        <aside className="p-8 border-[3px] border-dotted border-(--icons-color) mt-12">
          <div className="grid grid-cols-[1.5fr_4fr] gap-12 max-[35em]:grid-cols-1">
            <img src={fileUrl} width={200} height={200} />
            <div>
              <div className="flex justify-between font-bold text-[1.2rem] max-[35em]:grid">
                <p className="font-medium">NFT Name: <span className="font-bold">{name}</span></p>
                <p className="font-medium">Website: <span className="font-bold">{website}</span></p>
              </div>

              <p className="mt-4">
                <span className="font-bold text-[1.2rem] mr-4">Description</span>
                {description}
              </p>

              <div className="grid grid-cols-3 max-[35em]:grid-cols-1">
                <p><span className="font-bold mr-2">Royalties</span>{royalties}</p>
                <p><span className="font-bold mr-2">FileSize</span>{fileSize}</p>
                <p><span className="font-bold mr-2">Properties</span>{properties}</p>
                <p><span className="font-bold mr-2">Category</span>{category}</p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DropZone;
