import AdminSidebar from '@/components/user/AdminSidebar'
import Header from '@/components/user/Header'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='w-full min-h-screen'>
      <Header className='bg-white text-blue-4 ' seachFieldStyles='bg-gray-100 border-none'/>
      <section className='flex flex-between text-blue-4'>
        <AdminSidebar/>
        <div className="overflow-hidden w-[calc(100vw-170px)] h-[calc(100vh-64px)] p-3 bg-green-3">
          {children}
        </div>
      </section>
    </main>
  )
}

export default layout
