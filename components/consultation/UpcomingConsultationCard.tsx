import Image from 'next/image';
import React from 'react'
import { CgClose } from 'react-icons/cg';
import { MdApproval, MdDeleteOutline } from 'react-icons/md';
import { Button } from '../ui/button';

interface UpcomingConsultationCardProps {
    problemStatement?: string;
    scheduledAt: Date;
    clientName: string;
    bookingType: string; 
}

const UpcomingConsultationCard = ({
    problemStatement, scheduledAt, 
    bookingType, clientName
}: UpcomingConsultationCardProps) => {
  return (
    <div className='w-[300px] h-[100px] flex p-2 hover:bg-gray-100'>
      <span className='rounded-lg bg-cyan-100 mr-4 font-bold text-2xl w-10 h-10 flex flex-center '>
        {clientName.slice(0,1)}
      </span>
    <div className="">
        <h1 className="text-lg leading-tight capitalize">{clientName}</h1>
        <p className="text-sm">Date: {new Date(scheduledAt).toLocaleString()}</p>
        <p className="text-sm">Channel: {bookingType}</p>
        <p className="text-sm">Problem: {problemStatement}</p>
    </div>
    </div>
  )
}

export default UpcomingConsultationCard
