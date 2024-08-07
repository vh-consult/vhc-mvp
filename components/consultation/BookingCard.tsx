import { cookies } from 'next/headers'
import React from 'react'

const BookingCard = ({host}: {host:any}) => {
  const cookieStore = cookies()
  const userData = cookieStore.get("data")
  return (
    <div>
      
    </div>
  )
}

export default BookingCard
