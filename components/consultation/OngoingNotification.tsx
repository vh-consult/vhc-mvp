import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

interface OngoingNotificationProps {
    startedAt: Date;
    patient: string;
    link: string;
}

const OngoingNotification = ({
    startedAt, patient, link
}: OngoingNotificationProps) => {
  const showStartTime = () => {
    const now = new Date(); 
    const elapsed = now.getTime() - startedAt.getTime(); 
  
    // Calculate the hours and minutes from the elapsed time
    const hours = Math.floor(elapsed / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
  
    // Format the output string
    const time = `${hours} hour${hours !== 1 ? 's' : ''}, ${minutes} minute${minutes !== 1 ? 's' : ''}`;
    return time;
  };
  return (
    <div className='p-2 m-4 hover:bg-gray-100 h-[125px]'>
      <div className="flex">
        <span className='rounded-lg bg-cyan-100 mr-4 font-bold text-2xl w-10 h-10 flex flex-center '>
          {patient.slice(0,1)}
        </span>
        <div className='flex flex-col'>
          <h1 className="text-2xl font-medium">{patient}</h1>
          <span className="mb-2">
            <span className="opacity-60">Started:</span> {showStartTime()} ago
          </span>          
          <Link href={link}>
            <Button className='bg-blue-1 hover:opacity-85 text-white h-8'>Join now</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OngoingNotification
