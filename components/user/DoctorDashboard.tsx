"use client"
import React, {useState, useEffect} from 'react'
import ClientList from '../doctor/ClientList'
import OngoingNotification from '../consultation/OngoingNotification'
import RequestCard from '../consultation/RequestCard'
import { doctorDashboardData } from '@/lib/actions/doctor.actions'
import useDBUser from '@/hooks/useDBUser'



const DoctorDashboard = () => {
  const [requests, setRequests] = useState([])
  const [ongoing, setOngoing] = useState<any>()
  const [upcoming, setUpcoming] = useState([])
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
              requests.map((request:any)=>(
                <RequestCard 
                  bookingType={request.channel} 
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
                    link={ongoing.link}
                  />
                ): (
                  <span className="">No ongoing session</span>
                )
              }
            </div>
        </div>
        <div className="w-full h-full bg-white shadow-sm rounded-lg">
            <h3 className="text-sm opacity-75 font-semibold p-3">
                Upcoming
            </h3>
            <div className="w-full">
                {/* <ClientList/> */}
            </div>
        </div>
      </div>
    </main>
  )
}

export default DoctorDashboard
