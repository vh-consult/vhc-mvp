"use client"
import React, {useState, useEffect} from 'react'
import ClientList from '../doctor/ClientList'
import OngoingNotification from '../consultation/OngoingNotification'
import RequestCard from '../consultation/RequestCard'
import { doctorDashboardData } from '@/lib/actions/doctor.actions'
import useDBUser from '@/hooks/useDBUser'
import UpcomingConsultationCard from '../consultation/UpcomingConsultationCard'

type TPatient = {
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  healthRecord?: any
}

type BookingDataType = {
  date: Date;
  patient: TPatient;
  link?: string;
  problemStatement?: string;
  channel?: string
}

const DoctorDashboard = () => {
  const [requests, setRequests] = useState<BookingDataType[]>([])
  const [ongoing, setOngoing] = useState<BookingDataType>()
  const [upcoming, setUpcoming] = useState<BookingDataType[]>([])
  const {clerkId} = useDBUser()

  useEffect(() => {
    const fetchData = async () => {
      const data = await doctorDashboardData(clerkId)
      setRequests(data?.requests)
      setUpcoming(data?.upcoming)
      setOngoing(data?.ongoing)
    }
    fetchData()
  }, [clerkId])
  
  return (
    <main className='w-full h-[535px] mx-auto text-green-4 flex flex-between'>
      <div className="w-[60%] h-full bg-white rounded-lg shadow-sm">
        <h3 className="text-sm opacity-75 font-semibold p-3">
          Appointment Requests
        </h3>
        <div className="w-full grid grid-cols-2 gap-6 px-4">
          {
            requests.length > 0 ? (
              requests.map((request:BookingDataType, index: number)=>(
                <RequestCard 
                  key={index}
                  bookingType={request.channel!} 
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
      </div>
      <div className="w-[37%] h-full flex flex-col gap-y-3 flex-between">
        <div className="w-full  bg-white shadow-sm rounded-lg ">
            <h3 className="text-sm opacity-75 font-semibold p-3">
              Ongoing Session(s)
            </h3>
            <div className="w-full">
              {
                ongoing ? (
                  <OngoingNotification 
                    startedAt={new Date(ongoing.date)} 
                    patient={ongoing.patient.firstName + ' ' + ongoing.patient.lastName} 
                    link={ongoing.link!}
                  />
                ): (
                  <span className="">No ongoing session</span>
                )
              }
            </div>
        </div>
        <div className="w-full h-full bg-white shadow-sm rounded-lg">
            <h3 className="text-sm opacity-75 font-semibold p-3">
              Pending Prescriptions
            </h3>
            <div className="w-full">
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
                    <span className="">No upcoming appointments</span>
                  )
                }
            </div>
        </div>
      </div>
    </main>
  )
}

export default DoctorDashboard
