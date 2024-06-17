'use client'
import Sidebar from '@/components/user/Sidebar'
import useUserRole from '@/hooks/useUserRole'
import React from 'react'


 
const layout = (
  { doctor, 
    patient, pharmAdmin, hospAdmin }: 
  {
    children:React.ReactNode,
    doctor:React.ReactNode,
    patient:React.ReactNode,
    pharmAdmin:React.ReactNode,
    hospAdmin:React.ReactNode,
  }) => {
    const {userRole} = useUserRole()
  return (
    
    <main>
      <Sidebar/>
      <section className='w-full min-h-[calc(100vh-64px)] pl-[120px] pr-[40px] py-[20px]'>
        {
          userRole==="patient"? patient:
          userRole==="doctor"? doctor:
          userRole==="pharmacyAdmin"? pharmAdmin:
          userRole==="hospitalAdmin"? hospAdmin: ``
        }
      </section>
    </main>
  )
}


export default layout