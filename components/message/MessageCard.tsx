'use client'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { getMessages } from '@/lib/actions/appointment.actions'
import Image from 'next/image';
import { cn } from '@/lib/utils';
import MessageModal from './MessageModal';

export interface MessageCardProps {
  imageUrl: string;
  sender: string;
  message: string;
  time: Date;
  className?: string
}

const MessageCard = ({imageUrl, sender, message, time, className}: MessageCardProps) => {
  const [openMessage, setOpenMessage] = useState<boolean>(false)
  return (
    <div 
      onClick={() => {setOpenMessage(true)}} 
      className={cn("flex flex-row w-full p-3 cursor-pointer", className)}>
      <Image 
        src={imageUrl}
        alt='user_picture'
        width={45}
        height={45}
        className='rounded-full w-[45px] h-[45px] object-cover mr-4'
      />
      <div className="flex flex-col">
      <div className="flex flex-row flex-between">
        <span className='text-base'>{sender}</span>
        <span className='text-xs'>{new Date(time).toLocaleTimeString()}</span>
      </div>
      <p className="text-sm">{message.slice(0, 60)}...</p>
    </div>
    {
      openMessage === true? (
        <MessageModal 
          imageUrl={imageUrl}
          isOpen={openMessage}
          message={message}
          onClose={()=>setOpenMessage(!openMessage)}
          sender={sender}
          time={new Date(time)}
        /> 
      ): ''
    }
  </div>
  )
}


export default MessageCard
