'use client'
import React, { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { getRequests } from '@/lib/actions/appointment.actions'
import Image from 'next/image';

export interface RequestCardProps {
  imageUrl: string;
  sender: string;
  message: string;
  time: Date;
}

const requests = [
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

const RequestCard = ({imageUrl, sender, message, time}: RequestCardProps) => {
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

const RequestList = () => {
  // const {user} = useUser()
  // const [equests, setRequests] = useState<RequestCardProps[]>()

  // const fetchRequests = async () => {
  //   const allRequests = await getRequests(user?.id!)
  //   setRequests(allRequests)
  // }
    
  return (
    <div className='w-full flex flex-col flex-center'>
      {
        requests ? (requests.map((request, index) => (
          <RequestCard 
            key={index}
            imageUrl={request.imageUrl}
            time={request.time}
            sender= {request.sender}
            message= {request.message}
          />
        )).slice(0,5)): 'No Request'
      }
    </div>
  )
}

export default RequestList
