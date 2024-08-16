import BookingCard from '@/components/consultation/BookingCard'
import AppointmentCalendar from '@/components/general/AppointmentCalendar'
import { fetchDoctorBookings } from '@/lib/actions/appointment.actions'
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
  const allBookings = await fetchDoctorBookings(user?.id!)
  return (
    <div>
      {
        allBookings.map((booking:any, index:number) => (
          <BookingCard appointment={booking} key={index}/>
        ))
      }
    </div>
  )
}

export default BookingsPage
