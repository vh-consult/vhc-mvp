"use client"
import ConsultationForm from '@/components/doctor/ConsultationForm'
import AppointmentCalendar from '@/components/general/AppointmentCalendar'
import AddToInventory from '@/components/pharmacy/AddToInventory'
import ItemPreview from '@/components/pharmacy/ItemPreview'
import PrescriptionForm from '@/components/pharmacy/PrescriptionForm'
import React, { useState } from 'react'

const page = () => {
  return (
    <section className='w-full min-h-screen flex flex-center bg-dark-2 text-green-1'>
      <ItemPreview companyId='' itemId=''/>
    </section>
  )
}

export default page
