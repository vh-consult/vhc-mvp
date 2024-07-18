"use client"
import AddToInventory from '@/components/pharmacy/AddToInventory'
import React, { useState } from 'react'

const page = () => {
  return (
    <section className='w-full min-h-screen bg-dark-2 text-green-1'>
      <AddToInventory/>
    </section>
  )
}

export default page
