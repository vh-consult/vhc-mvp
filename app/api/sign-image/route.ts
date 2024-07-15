import {v2 as cloudinary} from "cloudinary"

// export async function POST(request: Request){
//     const body = (await request.json()) as {
//         paramsToSign: Record<string, string>
//     };
//     const {paramsToSign} = body;
//     const signature = cloudinary.utils.api_sign_request(paramsToSign, process.env.CLOUDINARY_API_SECRET as string);
//     console.log(signature)
//     return Response.json({signature})
// }


export async function POST(request: Request){
  const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL

    const body = (await request.json())
    const {paramsToSign} = body;
    const data = await fetch(endpoint as string, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: paramsToSign
      }).then(res => res.json())
      console.log(data)
    return Response.json(data)
}

