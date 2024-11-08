import Sidebar from '@/components/user/Sidebar'
import React from 'react'

const layout = (
  { children }: { children:React.ReactNode }) => {
  return (
    <main>
      <Sidebar/>
      <section className='w-full 
      min-h-[calc(100vh-64px)] pl-[120px] 
      pr-[40px] py-[15px]'>
       {children}
      </section>
    </main>
  )
}

export default layout