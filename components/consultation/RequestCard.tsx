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
    <div>
      <Image src={clientImage} alt='' width={40} height={40}/>
      <div className="">
        <h1 className="text-lg">{clientName}</h1>
        <p className="">{new Date(scheduledAt).toDateString()}</p>
      </div>
      <div className="">
        <span className="w-10 h-10 rounded-full border-2">
            <CgClose/>
        </span>
        <span className="w-10 h-10 rounded-full border-2">
            <MdApproval/>
        </span>
      </div>
    </div>
  )
}

export default RequestCard
