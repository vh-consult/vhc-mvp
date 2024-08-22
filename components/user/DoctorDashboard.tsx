import React from 'react'
import ClientList from '../doctor/ClientList'
import OngoingNotification from '../consultation/OngoingNotification'
import RequestCard from '../consultation/RequestCard'

const DoctorDashboard = () => {
  return (
    <main className=' h-[535px] mx-auto flex flex-between'>
      <div className="w-[60%] h-full bg-white rounded-lg">
        <h3 className="text-sm opacity-75 font-semibold p-3">
          Appointment Requests
        </h3>
        <div className="w-full grid grid-cols-2 gap-6 px-4">
        <RequestCard 
          bookingType='Virtual consultation' 
          clientImage='/images/'
          clientName='Olokwa Nchewzu'
          problemStatement='Menim mpo'
          scheduledAt={new Date(2024, 7, 25, 20, 30)}
        />          
      </div>
      </div>
      <div className="w-[37%] h-full flex flex-col flex-between">
        <div className="w-full h-[48%] bg-white rounded-lg ">
            <h3 className="text-sm opacity-75 font-semibold p-3">
                Ongoing Session(s)
            </h3>
            <div className="w-full">
            <OngoingNotification 
              startedAt={new Date(2024, 7, 21, 10, 30)} 
              patient='Samuel Luke' 
              link=''
            />
            </div>
        </div>
        <div className="w-full h-[48%] bg-white rounded-lg">
            <h3 className="text-sm opacity-75 font-semibold p-3">
                Notice(s)
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
