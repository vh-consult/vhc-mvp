'use client'
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { getMessages } from '@/lib/actions/appointment.actions'
import MessageCard, { MessageCardProps } from './MessageCard'


const messages = [
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


const Message = ({className}: {className?:string}) => {
  // const user = JSON.parse(Cookies.get("user") || '{}');
  // const [messages, setMessages] = useState([])
  //   useEffect(()=>{
  //     const fetchMessages = async () => {
  //       const allMessages = await getMessages(user?.id as string)
  //       setMessages(allMessages)
  //     }
  //     fetchMessages()
  // }, [user?.id])
  return (
    <div className={cn(`w-full h-[400px] bg-white rounded-lg`, className)}>
        <h3 className="w-full text-sm  font-semibold p-3">
          Recent messages
        </h3>
        <div className="w-full">
        <div className='w-full flex flex-col flex-center'>
      {
        messages ? (messages.map((message:MessageCardProps, index:number) => (
          <MessageCard 
            className={className}
            key={index}
            imageUrl={message.imageUrl}
            time={message.time}
            sender= {message.sender}
            message= {message.message}
          />
        )).slice(0,5)): 'No Message'
      }
    </div>        </div>
    </div>
  )
}

export default Message