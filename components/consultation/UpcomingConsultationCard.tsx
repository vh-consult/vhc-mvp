import Image from 'next/image';
import React from 'react'
import { CgClose } from 'react-icons/cg';
import { MdApproval, MdDeleteOutline } from 'react-icons/md';
import { Button } from '../ui/button';

interface UpcomingConsultationCardProps {
    problemStatement?: string;
    scheduledAt: Date;
    clientName: string;
    appointment: string; 
}

const UpcomingConsultationCard = ({
    problemStatement, scheduledAt, 
    appointment, clientName
}: UpcomingConsultationCardProps) => {
  return (
    <div className='w-full h-[100px] rounded-md flex p-2 bg-white hover:bg-gray-50'>
      <span className='rounded-lg bg-cyan-100 mr-4 font-bold text-2xl w-10 h-10 flex flex-center '>
        {clientName.slice(0,1)}
      </span>
    <div className="">
        <h1 className="text-lg leading-tight capitalize">{clientName}</h1>
        <p className="text-sm">Date: {new Date(scheduledAt).toLocaleString()}</p>
        {/* <p className="text-sm">Channel: {appointment}</p> */}
        <p className="text-sm">Problem: {problemStatement}</p>
    </div>
    </div>
  )
}

export default UpcomingConsultationCard
