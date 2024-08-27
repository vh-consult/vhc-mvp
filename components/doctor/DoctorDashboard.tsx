import React from 'react'
import AppointmentRequests from './AppointmentRequests';
import OngoingConsultationAlert from '../consultation/OngoingConsultationAlert';

export type TPatient = {
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  healthRecord?: any
}

export type BookingDataType = {
  date: Date;
  patient: TPatient;
  link?: string;
  problemStatement?: string;
  channel?: string
}

const DoctorDashboard = () => {
  return (
    <main className='w-full h-[535px] mx-auto text-green-4 flex flex-between'>
      <div className="w-[60%] h-full bg-white rounded-lg shadow-sm">
        <h3 className="text-sm opacity-75 font-semibold p-3">
          Appointment Requests
        </h3>
        <AppointmentRequests/>
      </div>
      <div className="w-[37%] h-full flex flex-col gap-y-3 flex-between">
        <div className="w-full  bg-white shadow-sm rounded-lg ">
            <h3 className="text-sm opacity-75 font-semibold p-3">
              Ongoing Session(s)
            </h3>
            <OngoingConsultationAlert/>
        </div>
        <div className="w-full h-full bg-white shadow-sm rounded-lg">
            <h3 className="text-sm opacity-75 font-semibold p-3">
              Pending Prescriptions
            </h3>
            
        </div>
      </div>
    </main>
  )
}

export default DoctorDashboard
