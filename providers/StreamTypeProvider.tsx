
"use client"

import { tokenProvider } from '@/lib/actions/stream.actions';
import Loader from '@/components/general/Loader';
import { StreamVideo, StreamVideoClient } from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState } from 'react';
import Cookies from "js-cookie"

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY; 



export const StreamVideoProvider = ({children}:{children: ReactNode}) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient>()
  const user = JSON.parse(Cookies.get("user") || '{}');
    
    useEffect(() => {
        if(user !== undefined || !user) return;
        if(!apiKey) throw new Error('Stream key not found')
 
        const client = new StreamVideoClient({
            apiKey,
            user: {
                id: user?.id,
                name: user?.firstName || user?.id,
                image: user?.imageUrl
            },
            tokenProvider
        })
        setVideoClient(client)
    }, [user]);

    if(!videoClient) return <Loader/>

    return(
        <StreamVideo client={videoClient}>
            {children}
        </StreamVideo>
    )
}
