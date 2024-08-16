import Image from 'next/image'
import React from 'react'

const BookingCard = ({appointment}: {appointment:any}) => {
  return (
    <div className='w-[350px] h-[125px] bg-white'>
      <Image src={''} alt='' width={80} height={90} />
      <div className="flex flex-col">
        <h2 className="text-lg font-medium">
          {appointment.patient}
        </h2>
        <p className="">
          {new Date(appointment.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}

export default BookingCard
