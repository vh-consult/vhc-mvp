'use client'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { getMessages } from '@/lib/actions/appointment.actions'
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface MessageCardProps {
  imageUrl: string;
  sender: string;
  message: string;
  time: Date;
  className?: string
}

const Messages = [
  {
    imageUrl: '/images/doc-2.jpg',
    sender: 'Dr Myles Mills',
    message: 'This is an exciting opportunity to meet you in person. I had a lot to talk to you about your condition.',
    time: new Date(2024, 5, 12, 22, 32)
  },
  {
    imageUrl: '/images/doc-2.jpg',
    sender: 'Dr Myles Mills',
    message: 'This is an exciting opportunity to meet you in person. I had a lot to talk to you about your condition.',
    time: new Date(2024, 5, 12, 22, 32)
  },
  {
    imageUrl: '/images/doc-2.jpg',
    sender: 'Dr Myles Mills',
    message: 'This is an exciting opportunity to meet you in person. I had a lot to talk to you about your condition.',
    time: new Date(2024, 5, 12, 22, 32)
  },
  {
    imageUrl: '/images/doc-2.jpg',
    sender: 'Dr Myles Mills',
    message: 'This is an exciting opportunity to meet you in person. I had a lot to talk to you about your condition.',
    time: new Date(2024, 5, 12, 22, 32)
  },
  {
    imageUrl: '/images/doc-2.jpg',
    sender: 'Dr Myles Mills',
    message: 'This is an exciting opportunity to meet you in person. I had a lot to talk to you about your condition.',
    time: new Date(2024, 5, 12, 22, 32)
  },
]

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
  </div>
  )
}

const MessageList = ({className}: {className?: string}) => {
  const {user} = useUser()
  // useEffect(()=>{
      // const fetchMessages = async () => {
      //   const allMessages = await getMessages(user?.id!)
      //   setMessages(allMessages)
      // }
      // fetchMessages()
  // }, [user?.id])
    
  return (
    <div className='w-full flex flex-col flex-center'>
      {
        Messages ? (Messages.map((Message, index) => (
          <MessageCard 
            className={className}
            key={index}
            imageUrl={Message.imageUrl}
            time={Message.time}
            sender= {Message.sender}
            message= {Message.message}
          />
        )).slice(0,5)): 'No Message'
      }
    </div>
  )
}

export default MessageList
