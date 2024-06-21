import Header from '@/components/user/Header'
import React from 'react'

const UserLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='w-full min-h-screen bg-dark-2 text-green-1'>
      <Header/>
      {children}
    </main>
  )
}

export default UserLayout
