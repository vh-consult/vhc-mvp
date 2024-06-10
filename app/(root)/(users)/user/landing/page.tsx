"use client"

import AppointmentCalendar from '@/components/AppointmentCalendar'
import HomeCard from '@/components/consultation/HomeCard'
import { useRouter } from 'next/navigation'
import React from 'react'

const LandingPage = () => {
  const router = useRouter()
  return (
    <div className='bg-dark-2 '>
      {/* <HomeCard 
        className='bg-dark-1 w-[350px]'
        description=''
        title=''
        imgURL=''
        handleClick={()=>{}}
      /> */}

      <AppointmentCalendar color='blue-1'/>
    </div>
  )
}

export default LandingPage
