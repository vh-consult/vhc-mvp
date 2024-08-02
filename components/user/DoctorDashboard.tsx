import React from 'react'
import AppointmentList from '../doctor/AppointmentList'
import AlertList from '../pharmacy/AlertList'
import ClientList from '../doctor/ClientList'

const DoctorDashboard = () => {
  return (
    <main className='w-full h-[540px] mx-auto flex flex-between'>
      <div className="w-[60%] h-full bg-dark-1 rounded-lg">
        <h3 className="text-sm opacity-75 font-semibold p-3">
          Appointments
        </h3>
        <div className="w-full">
            <AppointmentList/>
        </div>
      </div>
      <div className="w-[37%] h-full flex flex-col flex-between">
        <div className="w-full h-[48%] bg-dark-1 rounded-lg ">
            <h3 className="text-sm opacity-75 font-semibold p-3">
                Alerts
            </h3>
            <div className="w-full">
                <AlertList/>
            </div>
        </div>
        <div className="w-full h-[48%] bg-dark-1 rounded-lg">
            <h3 className="text-sm opacity-75 font-semibold p-3">
                Clients
            </h3>
            <div className="w-full">
                <ClientList/>
            </div>
        </div>
      </div>
    </main>
  )
}

export default DoctorDashboard
