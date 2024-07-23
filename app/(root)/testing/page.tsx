"use client"
import InventoryList from '@/components/pharmacy/InventoryList'
import useDBUser from '@/hooks/useDBUser'
import React, { useState } from 'react'
const page = () => {
  const {companyId} = useDBUser()
  return (
    <section className='w-full min-h-screen flex flex-center bg-dark-2 text-green-1'>
      
      <InventoryList pharmacyId={companyId}/>
    </section>
  )
}

export default page
