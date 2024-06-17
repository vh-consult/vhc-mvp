'use client'
import useUserRole from '@/hooks/useUserRole'
import React from 'react'

const layout = (
  { doctor, patient, pharmAdmin, hospAdmin }: 
  {
    doctor:React.ReactNode,
    patient:React.ReactNode,
    pharmAdmin:React.ReactNode,
    hospAdmin:React.ReactNode,
  }) => {
    const {userRole} = useUserRole()
  return (
    <main>
        {
          userRole==="patient"? patient:
          userRole==="doctor"? doctor:
          userRole==="pharmacyAdmin"? pharmAdmin:
          userRole==="hospitalAdmin"? hospAdmin: ``
        }
    </main>
  )
}


export default layout