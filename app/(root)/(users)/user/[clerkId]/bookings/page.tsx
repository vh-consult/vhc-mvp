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
      <BookingCard appointment={''}/>
    </div>
  )
}

export default BookingsPage
