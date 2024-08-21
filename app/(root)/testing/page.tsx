import BookingDetails from '@/components/consultation/BookingDetails'
import OngoingNotification from '@/components/consultation/OngoingNotification'
import RequestCard from '@/components/consultation/RequestCard'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen bg-green-3 grid grid-cols-2'>
      <OngoingNotification 
        startedAt={new Date()} 
        patient='Samuel Luke' 
        problemStatement='Just headache' 
        link=''
      />
      <RequestCard 
        bookingType='Virtual consultation' 
        clientImage='/images/'
        clientName='Olokwa Nchewzu'
        problemStatement='Menim mpo'
        scheduledAt={new Date(2024, 7, 25, 20, 30)}
      />
      {/* <BookingDetails
        bookingType='Virtual consultation' 
        clientImage='/images/'
        clientName='Olokwa Nchewzu'
        problemStatement='Menim mpo'
        scheduledAt={new Date(2024, 7, 25, 20, 30)}
        clientAge={22}
        clientGender='Male'
        isAccepted
        isOpen={true}
        onClose={() => {}}
        link='/hehe '
      /> */}
    </div>
  )
}

export default page
