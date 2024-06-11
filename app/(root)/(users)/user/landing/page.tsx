"use client"

import AppointmentCalendar from '@/components/AppointmentCalendar'
import HomeCard from '@/components/consultation/HomeCard'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React from 'react'

const LandingPage = () => {
  const router = useRouter()
  const {isLoaded, user} = useUser()
  return (
    <div className='bg-dark-2 h-screen w-screen flex flex-center gap-10'>
      <HomeCard 
        className='bg-dark-1 text-sky-2 w-[350px]'
        description='Enter your dashboard '
        title='Dashboard'
        imgURL='/icons/Home.svg'
        handleClick={()=>{router.push(`/user/${user?.id}/overview`)}}
      />
      <HomeCard 
        className='bg-dark-1 text-sky-2 w-[350px]'
        description='Seek medical assistance'
        title='Consultation Room'
        imgURL='/icons/Video.svg'
        handleClick={()=>{router.push(`/consultation/home`)}}
      />
      <HomeCard 
        className='bg-dark-1 text-sky-2 w-[350px]'
        description='Purchase your drugs here'
        title='Visit Pharmacy'
        imgURL='/icons/mdi_drugs.png'
        handleClick={()=>{router.push(`/pharmacy/home`)}}
      />
    </div>
  )
}

export default LandingPage
