import Image from 'next/image';
import React from 'react'
import { CgClose } from 'react-icons/cg';
import { MdApproval } from 'react-icons/md';

interface RequestCardProps {
    problemStatement: string;
    scheduledAt: Date;
    clientName: string;
    clientImage: string;
    bookingType: string; 
}

const RequestCard = ({
    problemStatement, scheduledAt, clientImage,
    bookingType, clientName
}: RequestCardProps) => {
  return (
    <div className='flex items-center'>
      <span className='rounded-lg bg-cyan-100 font-bold text-2xl w-10 h-10 flex flex-center '>
        {clientName.slice(0,1)}
      </span>
      <div className="">
        <h1 className="text-lg">{clientName}</h1>
        <p className="">{new Date(scheduledAt).toDateString()}</p>
      </div>
      <div className="">
        <span className="w-8 h-8 mb-2 rounded-full border-2 border-red-500 flex flex-center text-red-500">
            <CgClose/>
        </span>
        <span className="w-8 h-8 rounded-full border-2 border-green-400 flex flex-center text-green-400">
            <MdApproval/>
        </span>
      </div>
    </div>
  )
}

export default RequestCard
