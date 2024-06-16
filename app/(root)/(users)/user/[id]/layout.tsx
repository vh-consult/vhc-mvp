
import Sidebar from '@/components/user/Sidebar'
import { getUserById } from '@/lib/actions/user.actions'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

async function getUserRole(id: string) {
  const activeUser = await currentUser()
  const user = await getUserById(activeUser?.id as string)
 
  return user.role;
   
 }
 
const layout = (
  { children, role}: 
  {
    role: "doctor"|"patient",
    children:React.ReactNode,

  }) => {
  return (
    <main>
      <Sidebar type={role} />
      
      <section className='w-full min-h-[calc(100vh-64px)] pl-[120px] pr-[40px] py-[20px]'>
        {children}
      </section>
    </main>
  )
}


export default layout