"use server"

import {v2 as cloudinary} from "cloudinary"

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})  

export const uploader = async (image: File) => {
    const arrayBuffer = await image.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)
    await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({
  
      }, function (error, result) {
        if (error) {
          reject(error)
          return
        }
        resolve(result)
      }).emit(buffer)
    })
}

