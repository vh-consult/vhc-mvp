"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { BiChat } from 'react-icons/bi'

const AppointmentCard = ({appointment}: {appointment:any}) => {
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
          <Button onClick={()=>{}} className='bg-blue-1 w-[100px] h-[30px] text-green-1 mt-2'>
            <BiChat/>
            Message
          </Button>
          <Button onClick={()=>{}}>
            View Details
          </Button>
      </div>
    </div>
  )
}

export default AppointmentCard
