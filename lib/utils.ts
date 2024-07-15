import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { getSignature, verifySignature } from "./actions/general.actions";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ERROR HANDLER
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    // This is a native JavaScript error (e.g., TypeError, RangeError)
    console.error(error.message);
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    // This is a string error message
    console.error(error);
    throw new Error(`Error: ${error}`);
  } else {
    // This is an unknown type of error
    console.error(error);
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
};


//IMAGE UPLOAD WITH CLOUDINARY
export const imageUploader = async(image: File, folderName: string) => {
  const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL
  const { timestamps, signature} = await getSignature()
  
  const formData = new FormData()
  formData.append('file', image!)
  formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!)
  formData.append('signature', signature!)
  //@ts-ignore
  formData.append('timestamps', timestamps)
  formData.append('folder', folderName)

  const data = await fetch(endpoint as string, {
    method: 'POST',
    body: formData
  }).then(res => res.json())

  const verifiedPublicId = await verifySignature({
    version: data?.version,
    signature: data?.signature,
    public_id: data?.public_id
  })

  return verifiedPublicId
}