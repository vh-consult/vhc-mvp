import React from 'react'
import AddToInventory from '@/components/pharmacy/AddToInventory'
import RegisterCompany from '@/components/company/RegisterCompany'
import ReminderList from '@/components/booking/ReminderCardAndList'
import ClientList from '@/components/doctor/ClientList'

const page = () => {

  return (
    <section className='w-full min-h-screen bg-dark-2 text-green-1'>
      <ReminderList/>
      {/* <RegisterCompany/> */}
      {/* <AddToInventory/> */}
    </section>
  )
}

export default page
