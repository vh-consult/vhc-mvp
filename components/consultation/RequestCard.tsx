import React from 'react'
import { MdApproval, MdDeleteOutline } from 'react-icons/md';
import { Button } from '../ui/button';

interface RequestCardProps {
    scheduledAt: Date;
    clientName: string;
    bookingType: string; 
}

const RequestCard = ({
    scheduledAt, 
    bookingType, clientName
}: RequestCardProps) => {
  return (
    <div className='w-[300px] h-[100px] flex p-2 hover:bg-gray-100'>
      <span className='rounded-lg bg-cyan-100 mr-4 font-bold text-2xl w-10 h-10 flex flex-center '>
        {clientName.slice(0,1)}
      </span>
      <div className="">
        <div className="">
          <h1 className="text-lg leading-tight capitalize">{clientName}</h1>
          <p className="text-sm">Date: {new Date(scheduledAt).toLocaleString()}</p>
          <p className="text-sm">Channel: {bookingType}</p>
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
