"use client"

import AppointmentCalendar from '@/components/AppointmentCalendar'
import HomeCard from '@/components/consultation/HomeCard'
import { getUserById } from '@/lib/actions/user.actions'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const LandingPage = () => {
  const { user } = useUser()
  const router = useRouter()
  const [userRole, setUserRole] = useState(null)
  const [companyId, setCompanyId] = useState('')

  useEffect(() => {
    const getUser = async () => {
      if (user?.id) {
        const userFromDB = await getUserById(user.id)
        setUserRole(userFromDB.role)
        console.log(userFromDB.role)
        // Assuming companyId is also fetched from the user
        setCompanyId(userFromDB.companyId)
      }
    }
    getUser()
  }, [user])

  return (
    <div className='bg-dark-2 min-h-screen w-full px-10 pt-20 pb-10 grid grid-cols-3 flex-wrap gap-10'>
      {
        userRole === "doctor" ? (
          <>
            <HomeCard 
              className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px]'
              description='Enter your dashboard '
              title='Dashboard'
              imgURL='/icons/Home.svg'
              handleClick={() => { router.push(`/doctor/${user?.id}/overview`) }}
            />
            <HomeCard 
              className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px]'
              description='Manage your contacts'
              title='Affiliation'
              imgURL='/icons/Home.svg'
              handleClick={() => { router.push(`/affiliation/home`) }}
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
        ) : userRole === "patient" ? (
          <>
            <HomeCard 
              className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px]'
              description='Enter your dashboard '
              title='Dashboard'
              imgURL='/icons/Home.svg'
              handleClick={() => { router.push(`/patient/${user?.id}/overview`) }}
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
              description='Purchase drugs here'
              title='Visit Pharmacy'
              imgURL='/icons/mdi_drugs.png'
              handleClick={() => { router.push(`/pharmacy/home`) }}
            />
          </>
        ) : userRole === "hospitalAdmin" ? (
          <>
            <HomeCard 
              className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px]'
              description='Enter your dashboard '
              title='Dashboard'
              imgURL='/icons/Home.svg'
              handleClick={() => { router.push(`/pharm-admin/${user?.id}/overview`) }}
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
        ) : userRole === "companyAdmin" ? (
          <>
            <HomeCard 
              className='bg-dark-1 hover:bg-dark-4 text-green-1 w-[350px]'
              description='Enter your dashboard '
              title='Dashboard'
              imgURL='/icons/Home.svg'
              handleClick={() => { router.push(`/company/${companyId}/`) }}
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
            handleClick={() => { router.push(`/user/${user?.id}/overview`) }}
          />
        ) : null
      }
    </div>
  )
}

export default LandingPage
