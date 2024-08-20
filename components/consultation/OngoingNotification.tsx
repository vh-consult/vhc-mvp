import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

interface OngoingNotificationProps {
    startedAt: Date;
    patient: string;
    problemStatement: string;
    link: string;
}

const OngoingNotification = ({
    startedAt, patient, problemStatement, link
}: OngoingNotificationProps) => {
  return (
    <div className=''>
      <h1 className="text-2xl font-medium">{patient}</h1>
      <p className="">{problemStatement}</p>
      <div className="flex">
        <span className="">
            Started At: {new Date(startedAt).toDateString()}
        </span>
        <Link href={link}>
            <Button className=''>Join now</Button>
        </Link>
      </div>
    </div>
  )
}

export default OngoingNotification
