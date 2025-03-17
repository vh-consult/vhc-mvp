"use client"
import AppointmentCard from '@/components/consultation/AppointmentCard'
import { fetchAcceptedAppointments } from '@/lib/actions/appointment.actions'
import { useUserStore } from '@/stores/user-store'
import React from 'react'

const AppointmentsPage = async () => {
  const {user} = useUserStore()
  const allAppointments = await fetchAcceptedAppointments(user?._id!)
  return (
    <main className="">
      <h1 className="text-4xl font-semibold">Booked Appointments</h1>
      <div className='grid grid-cols-3 gap-5'>
        {
          allAppointments.map((Appointment:any, index:number) => (
            <AppointmentCard appointment={Appointment} key={index}/>
          ))
        }
      </div>
    </main>
  )
}

export default AppointmentsPage
