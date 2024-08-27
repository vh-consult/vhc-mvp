import React from 'react'
import { AppointmentDataType } from './DoctorDashboard'
import RequestCard from '../consultation/RequestCard'
import { fetchAppointmentRequests } from '@/lib/actions/doctor.actions'
import { currentUser } from '@clerk/nextjs/server'
const AppointmentRequests = async () => {
    const user = await currentUser()
    const requests = await fetchAppointmentRequests(user?.id as string)
  return (
    <div className="w-full grid grid-cols-2 gap-6 px-4">
    {
      requests.length > 0 ? (
        requests.map((request:AppointmentDataType, index: number)=>(
          <RequestCard 
            key={index}
            appointmentType={request.channel as string} 
            clientName={request.patient.firstName + ' '+ request.patient.lastName}
            scheduledAt={new Date(request.date)}
          />          
        ))
      ): (
        <span className='size-full flex flex-center'>
          No requests
        </span>
      )
    }
  </div>
  )
}

export default AppointmentRequests
