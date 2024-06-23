"use client"

import Loader from '@/components/Loader'
import HomeCard from '@/components/consultation/HomeCard'
import useUserRole from '@/hooks/useUserRole'
import { useRouter } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'

const UserHomePage = () => {
  const router = useRouter()
  const {userRole} = useUserRole()
  
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
  const date = (new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full'
  })).format(now);
  return (
    <section className="pt-10">
      <div className="h-[300px] w-[90%] mx-auto rounded-[20px] bg-hero bg-cover">
      <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
        <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
        Upcoming Meeting at: 12:30 PM 
        </h2>
        <div  className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold lg:text-7xl">
            {time}
          </h1>
          <p className="text-lg font-medium text-green-1 lg:text-2xl">
            {date}
          </p>
        </div>
      </div>
    </div>
      <div className='bg-dark-2 min-h-screen w-[90%] mx-auto pt-10 pb-10 grid grid-cols-3 flex-wrap gap-10'>

        <Suspense fallback={<Loader/>}>
          {
            userRole === "doctor" || userRole === "patient" ? (
              <>
                <HomeCard 
                  className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px]'
                  description='Enter your dashboard '
                  title='Dashboard'
                  imgURL='/icons/Home.svg'
                  handleClick={() => { router.push(`/user/dashboard`) }}
                />
                <HomeCard 
                  className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px]'
                  description='Manage your contacts'
                  title='Affiliation'
                  imgURL='/icons/Home.svg'
                  handleClick={() => { router.push(`/user/affiliation`) }}
                />
                <HomeCard 
                  className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px]'
                  description='Provide medical assistance'
                  title='Consultation Room'
                  imgURL='/icons/Video.svg'
                  handleClick={() => { router.push(`/consultation/home`) }}
                />
                <HomeCard 
                  className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px]'
                  description='Purchase drugs'
                  title='Visit Pharmacy'
                  imgURL='/icons/mdi_drugs.png'
                  handleClick={() => { router.push(`/pharmacy/home`) }}
                />
              </>
            )  : userRole === "hospitalAdmin" ? (
              <>
                <HomeCard 
                  className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px]'
                  description='Enter your dashboard '
                  title='Dashboard'
                  imgURL='/icons/Home.svg'
                  handleClick={() => { router.push(`/user/dashboard`) }}
                />
                <HomeCard 
                  className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px]'
                  description='Consult with real-time and trusted physicians'
                  title='Manage Staff'
                  imgURL='/icons/Home.svg'
                  handleClick={() => { router.push(`/hospital/home`) }}
                />
                <HomeCard 
                  className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px]'
                  description='Seek medical assistance'
                  title='Consultations'
                  imgURL='/icons/Video.svg'
                  handleClick={() => { router.push(`/consultation/home`) }}
                />
                <HomeCard 
                  className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px]'
                  description='Purchase your drugs here'
                  title='Visit Pharmacy'
                  imgURL='/icons/mdi_drugs.png'
                  handleClick={() => { router.push(`/pharmacy/home`) }}
                />
              </>
            ) : userRole === "pharmacyAdmin" ? (
              <>
                <HomeCard 
                  className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px]'
                  description='Enter your dashboard '
                  title='Dashboard'
                  imgURL='/icons/Home.svg'
                  handleClick={() => { router.push(`/company/`) }}
                />
                <HomeCard 
                  className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px]'
                  description='Consult with real-time and trusted physicians'
                  title='Visit Hospital'
                  imgURL='/icons/Home.svg'
                  handleClick={() => { router.push(`/hospital/home`) }}
                />
                <HomeCard 
                  className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px]'
                  description='Seek medical assistance'
                  title='Consultation Room'
                  imgURL='/icons/Video.svg'
                  handleClick={() => { router.push(`/consultation/home`) }}
                />
                <HomeCard 
                  className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px]'
                  description='Purchase your drugs here'
                  title='Visit Pharmacy'
                  imgURL='/icons/mdi_drugs.png'
                  handleClick={() => { router.push(`/pharmacy/home`) }}
                />
              </>
            ) : userRole === "" ? (
              <HomeCard 
                className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px] h-[200px]'
                description='Activate to start'
                title='Account Activation'
                imgURL='/icons/Home.svg'
                handleClick={() => { router.push(`/user/overview`) }}
              />
            ) : null
          }
        </Suspense>
      </div>

    </section>
  )
}

export default UserHomePage
