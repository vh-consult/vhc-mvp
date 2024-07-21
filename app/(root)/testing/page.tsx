"use client"
import ConsultationForm from '@/components/doctor/ConsultationForm'
import AddToInventory from '@/components/pharmacy/AddToInventory'
import PrescriptionForm from '@/components/pharmacy/PrescriptionForm'
import React, { useState } from 'react'

const page = () => {
  return (
    <section className='w-full min-h-screen flex flex-center bg-dark-2 text-green-1'>
      {/* <AddToInventory/> */}
      {/* <ConsultationForm /> */}
      <PrescriptionForm/>

    </section>
  )
}

export default page
