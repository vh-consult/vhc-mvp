import React, { ReactNode } from 'react'
import {v2 as cloudinary} from 'cloudinary'

export const CloudinaryProvider = ({children}: {children: ReactNode}) => {
    cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
    })

  return (
    <div>
      {children}
    </div>
  )
}
