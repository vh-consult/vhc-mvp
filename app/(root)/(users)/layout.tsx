"use client"
import Header, { NavLinkProps } from '@/components/user/Header'
import useDBUser from '@/hooks/useDBUser'
import { usePathname } from 'next/navigation'
import React from 'react'

export const consultationSidebarLinks = [
  {
    imgURL: '/icons/Home.svg',
    route: `/consultation/home`,
    label: 'Home',
  },

  {
    imgURL: '/icons/upcoming.svg',
    route: `/consultation/upcoming`,
    label: 'Upcoming',
  },
  {
    imgURL: '/icons/Video.svg',
    route: `/consultation/recordings`,
    label: 'Recordings',
  },
];
const UserLayout = ({children}: {children: React.ReactNode}) => {
  const pathname = usePathname()
  return (
    <main className='w-full min-h-screen bg-dark-2 text-green-1'>
      <Header navigations={
        pathname.includes("/consultation") ?
        consultationSidebarLinks :  undefined
        }
      />
      {children}
    </main>
  )
}

export default UserLayout
