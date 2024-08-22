import BookingCard from '@/components/consultation/BookingCard'
import AppointmentCalendar from '@/components/general/AppointmentCalendar'
import { fetchAcceptedBookings } from '@/lib/actions/appointment.actions'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const BookingsHeader = () => {
  return(
    <>
    
    </>
  )
}

const BookingsPage = async () => {
  const user =await currentUser()
  const allBookings = await fetchAcceptedBookings(user?.id!)
  return (
    <main className="">
      <h1 className="text-4xl font-semibold">Booked Appointments</h1>
      <div className='grid grid-cols-3 gap-5'>
        {
          allBookings.map((booking:any, index:number) => (
            <BookingCard appointment={booking} key={index}/>
          ))
        }
      </div>
    </main>
  )
}

export default BookingsPage
