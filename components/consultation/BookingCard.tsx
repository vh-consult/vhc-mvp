import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const BookingCard = ({appointment}: {appointment:any}) => {
  return (
    <div className='w-[350px] h-[125px] bg-white p-4 shadow-sm hover:shadow-md cursor-pointer flex items-center'>
      <Image src={appointment.patient.photo} alt='' width={80} height={80} className='mr-4 w-[80px] h-[90px]' />
      <div className="flex flex-col">
        <h2 className="text-lg font-medium">
          {appointment.patient.firstName + ' ' + appointment.patient.lastName}
        </h2>
        <p className="">
          {new Date(appointment.date).toLocaleDateString()}
        </p>
        <Link href={appointment.link}>
          <Button className='bg-blue-1 w-[100px] h-[30px] text-green-1 mt-2'>Start Session</Button>
        </Link>
      </div>
    </div>
  )
}

export default BookingCard
