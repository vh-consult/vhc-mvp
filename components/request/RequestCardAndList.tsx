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

const RequestCard = ({imageUrl, sender, message, time}: RequestCardProps) => {
  return (
    <div className="flex flex-row flex-center w-full p-3 bg-dark-1 hover:bg-dark-3 cursor-pointer">
      <Image 
        src={imageUrl}
        alt='user_picture'
        width={45}
        height={45}
        className='rounded-full object-cover mr-4'
      />
      <div className="flex flex-col">
      <div className="flex flex-row flex-between">
        <span className='text-lg'>{sender}</span>
        <span className='text-xs'>{time.toLocaleTimeString()}</span>
      </div>
      <p className="text-sm">{message.slice(0, 60)}</p>
    </div>
  </div>
  )
}

const RequestList = () => {
  const {user} = useUser()
  const [Requests, setRequests] = useState<RequestCardProps[]>()

  const fetchRequests = async () => {
    const allRequests = await getRequests(user?.id!)
    setRequests(allRequests)
  }
    
  return (
    <div className='w-full flex flex-col flex-center'>
      {
        Requests ? (Requests.map((Request, index) => (
          <RequestCard 
            key={index}
            imageUrl={Request.imageUrl}
            time={Request.time}
            sender= {Request.sender}
            message= {Request.message}
          />
        ))): 'No Request'
      }
    </div>
  )
}

export default RequestList
