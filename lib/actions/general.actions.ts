"use server"
import { v2 as cloudinary } from "cloudinary";

const cloudinaryConfig = cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

export async function getSignature(folderName: string) {
  const timestamps = Math.floor(new Date().getTime()/1000)

  const signature = cloudinary.utils.api_sign_request(
    {timestamps, folder: folderName},
    cloudinaryConfig.api_secret!
  )
  console.log(timestamps, ' and ', signature)

  return {timestamps, signature}
}

export async function verifySignature(
  {public_id, version, signature}:
  {public_id:string, version:any, signature:any}
) {
  const expectedSignature = cloudinary.utils.api_sign_request(
    {public_id, version},
    cloudinaryConfig.api_secret as string
  )
  console.log(expectedSignature)
  console.log(signature)


  if (expectedSignature !== signature) throw new Error("signatures don't match")
  
  return public_id
}


//IMAGE UPLOAD WITH CLOUDINARY
export const imageUploader = async (image: File, folderName: string) => {
  const { timestamps, signature } = await getSignature(folderName)
  const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL

  const formData = new FormData()
  formData.append('file', image)
  formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!)
  formData.append('signature', signature)
  //@ts-ignore
  formData.append('timestamps', timestamps)
  formData.append('folder', folderName)

  const data = await fetch(endpoint as string, {
    method: 'POST',
    body: formData
  }).then(res => res.json())

  if (!data.secure_url) {
    throw new Error('Failed to upload image')
  }

  return data.secure_url
}


//IMAGE UPLOAD WITH CLOUDINARY
export const imageUploader2 = async(image: File, folderName: string) => {
  const { timestamps, signature} = await getSignature(folderName)
  const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL
  
  const formData = new FormData()
  formData.append('file', image!)
  formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!)
  formData.append('signature', signature!)
  //@ts-ignore
  formData.append('timestamps', timestamps)
  formData.append('folder', folderName)
  console.log(formData)
  const data = await fetch(endpoint as string, {
    method: 'POST',
    body: JSON.stringify(formData)
  }).then(res => res.json())
  console.log(data)

  const verifiedPublicId = await verifySignature({
    version: data?.version,
    signature: data?.signature,
    public_id: data?.public_id
  })

  return verifiedPublicId
}



export const uploader = async (base64Image: string) => {
  const buffer = Buffer.from(base64Image, 'base64');

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });

    uploadStream.end(buffer);
  });
};

// import {v2 as cloudinary} from "cloudinary"

// cloudinary.config({
//     cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// })  

// export const uploader = async (image: File) => {
//     const arrayBuffer = await image.arrayBuffer()
//     const buffer = new Uint8Array(arrayBuffer)
//     await new Promise((resolve, reject) => {
//       cloudinary.uploader.upload_stream({}, function (error, result) {
//         if (error) {
//           reject(error)
//           return
//         }
//         resolve(result) 
//       }).emit(buffer)
//     })
// }

