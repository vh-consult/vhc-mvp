import Header from '@/components/Header'
import Sidebar from '@/components/user/Sidebar'
import React from 'react'

const layout = ({children}: {children:React.ReactNode}) => {
  return (
    <main>
      <Sidebar type={"patient"}/>
      <section className='w-full min-h-[calc(100vh-64px)] pl-[120px] pr-[40px] py-[20px]'>
        {children}
      </section>
    </main>
  )
}

export default layout
