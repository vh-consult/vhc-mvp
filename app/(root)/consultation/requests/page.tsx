import AppointmentCard from '@/components/consultation/AppointmentCard'
import AppointmentCalendar from '@/components/general/AppointmentCalendar'
import { fetchAcceptedAppointments } from '@/lib/actions/appointment.actions'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const AppointmentsHeader = () => {
  return(
    <>
    
    </>
  )
}

const AppointmentsPage = async () => {
  const user =await currentUser()
  const allAppointments = await fetchAcceptedAppointments(user?.id!)
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
