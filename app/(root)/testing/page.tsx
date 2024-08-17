import ConsultationComment from '@/components/consultation/ConsultationComment'
import ConsultationForm from '@/components/doctor/ConsultationForm'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen bg-green-3 grid grid-cols-2'>
      <ConsultationForm bookingId=''/>
      <ConsultationComment/>
    </div>
  )
}

export default page
