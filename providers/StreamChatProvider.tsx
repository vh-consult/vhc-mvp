"use client"

import { tokenProvider } from '@/lib/actions/stream.actions';
import Loader from '@/components/general/Loader';
import { useUser } from '@clerk/nextjs';

import { ReactNode, useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamChatProvider = () => {
    const {isLoaded, user} = useUser()
    const chatClient = new StreamChat(apiKey!)
    if(!isLoaded || !user) return;
    if(!apiKey) throw new Error('Stream key not found')
    
    chatClient.setUser(
      {
        id: user?.id,
        name: user?.fullName || user?.id,
        image: user?.imageUrl
      }, tokenProvider
    )  
  return (
    <div>
      
    </div>
  )
}

export default StreamChatProvider
