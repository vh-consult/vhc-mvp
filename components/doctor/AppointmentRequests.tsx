"use client"
import React, {useEffect, useState} from 'react'
import { AppointmentDataType } from './DoctorDashboard'
import RequestCard from '../consultation/RequestCard'
import { fetchRequestedAppointments } from '@/lib/actions/appointment.actions'

const requests = [
  {
    channel: "Virtual Consultation",
    patient:{firstName: "Kofi", lastName: "Brown"},
    date: new Date(2024, 7, 26, 11, 30)
  },
  {
    channel: "Lab Session",
    patient:{firstName: "Kofi", lastName: "Brown"},
    date: new Date(2024, 7, 26, 13, 30)
  },
  {
    channel: "Virtual Consultation",
    patient:{firstName: "Kofi", lastName: "Brown"},
    date: new Date(2024, 7, 27, 9, 30)
  },
  {
    channel: "In-person Visitation",
    patient:{firstName: "Kofi", lastName: "Brown"},
    date: new Date(2024, 7, 28, 10, 30)
  },
]

const AppointmentRequests = () => {
  
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
