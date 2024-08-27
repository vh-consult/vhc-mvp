import React from 'react'
import { BookingDataType } from './DoctorDashboard'
import UpcomingConsultationCard from '../consultation/UpcomingConsultationCard'
import { fetchUpcoming } from '@/lib/actions/doctor.actions'

const DoctorAppointmentList = async ({clerkId}:{clerkId: string}) => {
    const upcoming:Array<BookingDataType> = await fetchUpcoming(clerkId)
  return (
    <>
        {
            upcoming.length > 0 ? upcoming.map((appointment: BookingDataType, index:number)=>(
            <UpcomingConsultationCard 
                key={index}
                bookingType={appointment.channel!}
                clientName={appointment.patient.firstName + ' ' + appointment.patient.lastName}
                problemStatement={appointment.problemStatement}
                scheduledAt={new Date(appointment.date)}
            />
            )) : (
            <span className="size-full flex flex-center">No upcoming appointments</span>
            )
        }
    </>
  )
}

export default DoctorAppointmentList
