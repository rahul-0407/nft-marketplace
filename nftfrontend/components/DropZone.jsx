'use client'

import React,{useState, useCallback} from 'react'
import { useDropzone } from 'react-dropzone/.'

const DropZone = ({title, heading, subHeading, itemName, website, description, fileSize, category, properties, image, royalties}) => {

  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async(acceptedFile)=>{
    setFileUrl(acceptedFile[0])
  })

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  })

  return (
    <div className='DropZone'>
      <div className="DropZone_box" {...getRootProps()}>
        <input {...getInputProps()}/>
        <div className='DropZone_box_input'>
          <p>{title}</p>
          <div className='DropZone_box_input_img'>
            <img src={image} alt="upload" width={100} height={100} className='DropZone_box_input_img_img' objectFit="contain"/>
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>
      {fileUrl && (
        <aside className='DropZone_box_aside'>
          <div className='DropZone_box_aside_box'>
            <img src="nft-image-1.png" alt="nft image" width={200} height={200}/>
            <div className='DropZone_box_aside_box_preview'>
              <div className='DropZone_box_aside_box_preview_one'>
                <p><samp>NFT Name:</samp>{itemName || ""}</p>
                <p><samp>Website:</samp>{website || ""}</p>
              </div>

              <div className='DropZone_box_aside_box_preview_two'>
                <p>
                  <span>Description</span>
                  {description || ""}
                </p>
              </div>

              <div className='DropZone_box_aside_box_preview_three'>
                <p><span>Royalties</span>{royalties || ""}</p>
                <p><span>FileSize</span>{fileSize || ""}</p>
                <p><span>Properties</span>{properties || ""}</p>
                <p><span>Category</span>{category || ""}</p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  )
}

export default DropZone