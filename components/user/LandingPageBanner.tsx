"use client"
import { useUser } from '@/hooks/useUser';
import React, { useEffect, useState } from 'react'
import DoctorAppointmentList from '../doctor/DoctorAppointmentList';
import MedCard from '../patient/MedCard';
import Cookies from "js-cookie"
const LandingPageBanner = () => {
  const [currentTime, setCurrentTime] = useState<string>('')
  const [dateToday, setDateToday] = useState<string>('')
  const user:any = Cookies.get('user"')
  useEffect(() => {
    // Only set the time on the client side
    const updateTime = () => {
      const now = new Date()
      setDateToday(now.toLocaleDateString())
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }))
    }

    updateTime() // Initial update
    const interval = setInterval(updateTime, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])
  return (
            <div className="flex h-[calc(100vh-90px)] flex-col  max-md:px-2 max-md:py-4 lg:p-5">
            <div  className="flex flex-col gap-2">
              <p className="text-base font-medium text-dark lg:text-lg leading-tight">
                {dateToday}
              </p>
              <h1 className="text-2xl text-dark font-extrabold lg:text-3xl leading-none">
                {currentTime}
              </h1>
                  <h2 className="bg-secondary rounded py-2 text-center text-base mb-4 font-normal">
              {
                user!.role === "Patient"? (
                    "Medication Alert"
                  ): user!.role === "Doctor" ? ("Upcoming Appointments"
                  ): ''
                }
                  </h2> 
            </div>
            <div className="">
                {
                  user!.role === "Doctor" ? (
                    <DoctorAppointmentList id={user?.id}/>
                  ): user!.role === "Patient"? (
                    <MedCard 
                    imageSrc={ '/images/drug 5.jpg'}
                    drug={ 'Zimadal 50mg'}
                    time={ new Date(0, 0, 0, 11, 30)}
                    condition={ 'Before Meal'}
                    quantity={ 4}
                />          ): ''
                }
            </div>
          </div>
  )
}

export default LandingPageBanner
