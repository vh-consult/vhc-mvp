"use client"
import React, {useEffect, useState} from 'react'
import { AppointmentDataType } from './DoctorDashboard'
import RequestCard from '../consultation/RequestCard'
import useDBUser from '@/hooks/useDBUser'
import { fetchRequestedAppointments } from '@/lib/actions/appointment.actions'

const AppointmentRequests = () => {
  const {clerkId} = useDBUser()
  const [requests, setRequests] = useState([])
  useEffect(() => {
    if (!clerkId) return;
    const fetch = async() => {
      const requests = await fetchRequestedAppointments(clerkId)
      setRequests(requests)
    }
    fetch()
  }, [clerkId])
  
  return (
    <div className="w-full grid grid-cols-2 gap-6 px-4">
    {
      requests && requests.length > 0 ? (
        requests.map((request: any) => (
          <RequestCard 
            key={request._id} 
            appointmentType={request.channel as string} 
            clientName={request.patient.firstName + ' ' + request.patient.lastName}
            scheduledAt={new Date(request.date)}
          />          
        ))
      ) : (
        <span className='size-full flex flex-center'>
          No requests
        </span>
      )
    }
  </div>
  )
  
}

export default AppointmentRequests
