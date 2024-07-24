"use client"
import Header, { NavLinkProps } from '@/components/user/Header'
import useDBUser from '@/constants/hooks/useDBUser'
import { usePathname } from 'next/navigation'
import React from 'react'


const UserLayout = ({children}: {children: React.ReactNode}) => {
  const pathname = usePathname()
  return (
    <main className='w-full min-h-screen bg-dark-2 text-green-1'>
      <Header />
      {children}
    </main>
  )
}

export default UserLayout
