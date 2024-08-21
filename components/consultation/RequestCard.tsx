import Image from 'next/image';
import React from 'react'
import { CgClose } from 'react-icons/cg';
import { MdApproval, MdDeleteOutline } from 'react-icons/md';
import { Button } from '../ui/button';

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
    <div className='w-[300px] h-[100px] flex p-2 hover:bg-gray-100'>
      <span className='rounded-lg bg-cyan-100 mr-4 font-bold text-2xl w-10 h-10 flex flex-center '>
        {clientName.slice(0,1)}
      </span>
      <div className="">
        <div className="">
          <h1 className="text-lg leading-tight">{clientName}</h1>
          <p className="text-sm">{new Date(scheduledAt).toLocaleString()}</p>
        </div>
        <div className="flex mt-2 text-sm">
          <Button className="w-[100px] h-8 mr-2 rounded-md text-white flex flex-center bg-red-400 hover:bg-red-600">
              <MdDeleteOutline className='mr-1'/> Reject
          </Button>
          <Button className="w-[120px] h-8 rounded-md flex text-white flex-center bg-green-400 hover:bg-green-600">
              <MdApproval className='mr-1'/> Accept
          </Button>
        </div>
      </div>
    </div>
  )
}

export default RequestCard
