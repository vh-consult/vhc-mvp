'use client'
import React, { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { getMessages } from '@/lib/actions/appointment.actions'
import Image from 'next/image';

export interface MessageCardProps {
  imageUrl: string;
  sender: string;
  message: string;
  time: Date;
}

// const Messages = [
//   {
//     imageUrl: '/images/doc-2.jpg',
//     sender: 'Dr Myles Mills',
//     message: 'This is an exciting opportunity to meet you in person. I had a lot to talk to you about your condition.',
//     time: new Date(2024, 5, 12, 22, 32)
//   },
//   {
//     imageUrl: '/images/doc-2.jpg',
//     sender: 'Dr Myles Mills',
//     message: 'This is an exciting opportunity to meet you in person. I had a lot to talk to you about your condition.',
//     time: new Date(2024, 5, 12, 22, 32)
//   },
//   {
//     imageUrl: '/images/doc-2.jpg',
//     sender: 'Dr Myles Mills',
//     message: 'This is an exciting opportunity to meet you in person. I had a lot to talk to you about your condition.',
//     time: new Date(2024, 5, 12, 22, 32)
//   },
//   {
//     imageUrl: '/images/doc-2.jpg',
//     sender: 'Dr Myles Mills',
//     message: 'This is an exciting opportunity to meet you in person. I had a lot to talk to you about your condition.',
//     time: new Date(2024, 5, 12, 22, 32)
//   },
//   {
//     imageUrl: '/images/doc-2.jpg',
//     sender: 'Dr Myles Mills',
//     message: 'This is an exciting opportunity to meet you in person. I had a lot to talk to you about your condition.',
//     time: new Date(2024, 5, 12, 22, 32)
//   },
// ]

const MessageCard = ({imageUrl, sender, message, time}: MessageCardProps) => {
  return (
    <div className="flex flex-row flex-center w-full p-3 bg-dark-1 hover:bg-dark-3 cursor-pointer">
      <Image 
        src={imageUrl}
        alt='user_picture'
        width={45}
        height={45}
        className='rounded-full w-[45px] h-[45px] object-cover mr-4'
      />
      <div className="flex flex-col">
      <div className="flex flex-row flex-between">
        <span className='text-lg'>{sender}</span>
        <span className='text-xs'>{time.toLocaleTimeString()}</span>
      </div>
      <p className="text-sm">{message.slice(0, 45)}...</p>
    </div>
  </div>
  )
}

const MessageList = () => {
  const {user} = useUser()
  const [Messages, setMessages] = useState<MessageCardProps[]>()

  const fetchMessages = async () => {
    const allMessages = await getMessages(user?.id!)
    setMessages(allMessages)
  }
    
  return (
    <div className='w-full flex flex-col flex-center'>
      {
        Messages ? (Messages.map((Message, index) => (
          <MessageCard 
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
