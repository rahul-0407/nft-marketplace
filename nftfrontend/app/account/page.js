'use client'

import React,{useState, useMemo, useCallback, useContext} from 'react'
import { useDropzone } from 'react-dropzone/.'
import Form from '@/components/Form'

const Account = () => {

    const [fileUrl, setFileUrl] = useState(null)

    const onDrop = useCallback(async(acceptedFile)=>{
      setFileUrl(acceptedFile[0]);
    },[])

    const {getRootProps, getInputProps} = useDropzone({
      onDrop,
      accept:"image/*",
      maxSize: 5000000
    })

  return (
    <div className='account'>
        <div className='account_info'>
            <h1>Profile setting</h1>
            <p>You can set preferred display name, create your profile URL and manage other personal settings.</p>
        </div>

        <div class="account_box">
          <div class="account_box_img" {...getRootProps()}>
            <input {...getInputProps}/>
            <img src="./user-1.png" alt="account upload" width={150} height={150} className='account_box_img_img'/>
            <p className='account_box_img_para'>Change Image</p>
          </div>
          <div class="account_box_form">
            <Form/>
          </div>
        </div>
    </div>
  )
}

export default Account