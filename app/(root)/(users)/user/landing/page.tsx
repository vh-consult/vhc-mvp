"use client"

import AppointmentCalendar from '@/components/AppointmentCalendar'
import HomeCard from '@/components/consultation/HomeCard'
import { getUserById } from '@/lib/actions/user.actions'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React from 'react'

const LandingPage = () => {
  const router = useRouter()
  const {isLoaded, user} = useUser()
  let userRole
  const displayHomeElements = async () => {
    const userInDB = await getUserById(user?.id as string)
    userRole = userInDB.role
  }
  return (
    <div className='bg-dark-2 h-screen w-screen px-10 py-10 grid grid-cols-3 flex-wrap gap-10'>
      {
        userRole === ""? 
        (
          <HomeCard 
            className='bg-dark-1 hover:bg-dark-4 text-sky-2 w-[350px]'
            description='Activate to start'
            title='Account Activation'
            imgURL='/icons/Home.svg'
            handleClick={()=>{router.push(`/user/${user?.id}/overview`)}}
          />
      ): (
        <>
          <HomeCard 
            className='bg-dark-1 hover:bg-dark-4 text-sky-2 w-[350px]'
            description='Enter your dashboard '
            title='Dashboard'
            imgURL='/icons/Home.svg'
            handleClick={()=>{router.push(`/user/${user?.id}/overview`)}}
          />
          <HomeCard 
            className='bg-dark-1 hover:bg-dark-4 text-sky-2 w-[350px]'
            description='Consult with real-time and trusted physicians'
            title='Visit Hospital'
            imgURL='/icons/Home.svg'
            handleClick={()=>{router.push(`/hospital/home`)}}
          />
        </>
      )
      }
      <HomeCard 
        className='bg-dark-1 hover:bg-dark-4 text-sky-2 w-[350px]'
        description='Seek medical assistance'
        title='Consultation Room'
        imgURL='/icons/Video.svg'
        handleClick={()=>{router.push(`/consultation/home`)}}
      />
      <HomeCard 
        className='bg-dark-1 hover:bg-dark-4 text-sky-2 w-[350px]'
        description='Purchase your drugs here'
        title='Visit Pharmacy'
        imgURL='/icons/mdi_drugs.png'
        handleClick={()=>{router.push(`/pharmacy/home`)}}
      />
    </div>
  )
}

export default LandingPage
