"use client"
import Header, { NavLinkProps } from '@/components/user/Header'
import { usePathname } from 'next/navigation'
import React from 'react'


const UserLayout = ({children}: {children: React.ReactNode}) => {
  const pathname = usePathname()
  return (
    <main className='w-full min-h-screen bg-green-3 text-green-4'>
      <Header />
      {children}
    </main>
  )
}

export default UserLayout
