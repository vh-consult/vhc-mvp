"use client"
import useDBUser from '@/hooks/useDBUser';
import React from 'react'

const LandingPageBanner = () => {
  const {role} = useDBUser()
  const now = new Date();
    const time = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
    const date = (new Intl.DateTimeFormat('en-US', {
      dateStyle: 'full'
    })).format(now);
  return (
    <div className="flex h-[calc(100vh-90px)] flex-col justify-between max-md:px-2 max-md:py-4 lg:p-5">
    <div  className="flex flex-col gap-2">
      <p className="text-base font-medium text-green-4 lg:text-lg leading-tight">
        {date}
      </p>
      <h1 className="text-2xl text-green-4 font-extrabold lg:text-3xl leading-none">
        {time}
      </h1>
          <h2 className="bg-green-1 rounded py-2 text-center text-base font-normal">
      {
        role === "Patient"? (
            "Medication Alert"
          ): role === "Doctor" ? ("Upcoming Appointments"
          ): ''
        }
          </h2>
    </div>
    <div className="">

    </div>
  </div>
  )
}

export default LandingPageBanner
