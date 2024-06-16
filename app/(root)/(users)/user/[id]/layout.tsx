'use client'
import Sidebar from '@/components/user/Sidebar'
import { getUserById } from '@/lib/actions/user.actions'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'


 
const layout = (
  { children, doctor, 
    patient, pharmAdmin, hospAdmin }: 
  {
    children:React.ReactNode,
    doctor:React.ReactNode,
    patient:React.ReactNode,
    pharmAdmin:React.ReactNode,
    hospAdmin:React.ReactNode,
  }) => {
    const {user} = useUser()
    const [userRole, setUserRole] = useState<
    "doctor"|"patient"|
    "hospitalAdmin"|"pharmacyAdmin"
    >()
    useEffect(() => {        
        if(!user) return;

        async function getUserRole() {
            const userFromDB:UserParams = await getUserById(user?.id as string)
            return setUserRole(userFromDB.role);
        }
        getUserRole()
    }, [user])
  return (
    
    <main>
      <Sidebar/>
      <section className='w-full min-h-[calc(100vh-64px)] pl-[120px] pr-[40px] py-[20px]'>
        {
          userRole==="patient"? patient:
          userRole==="doctor"? doctor:
          userRole==="pharmacyAdmin"? pharmAdmin:
          userRole==="hospitalAdmin"? hospAdmin: children
        }
      </section>
    </main>
  )
}


export default layout