"use client"
import { doctorSidebarElements, patientSidebarElements } from '@/constants'
import { SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { IconType } from 'react-icons'

interface SideNavProps {
    icon: IconType;
    label: string;
    route: string;
}

const Sidebar = ({type} : {type: "patient" | "doctor"}) => {
    const pathname = usePathname()
    const renderNavigation = (nav: SideNavProps, index: number) => {
        const isActive = pathname === nav.route || pathname.startsWith(`${nav.route}/`);
        return (
          <Link 
            href={nav.route} 
            key={index} 
            className={`flex flex-col mb-4 items-center py-3 hover:w-[85%] 
              hover:rounded-lg hover:mx-auto hover:bg-dark-4 ${isActive? `bg-dark-3 w-[85%] mx-auto rounded-lg`:
             'text-green-1'}
            `}
          >
            <div>{<nav.icon className='w-[20px] h-[20px]'/>}</div>
            <span className={`${isActive? 'font-medium' : ''} mt-1 text-[10px] `}>{nav.label}</span>
          </Link>
        );
      };
  return (
    <aside className={`w-[80px] h-[calc(100vh-64px)] fixed top-16 left-0 bg-dark-1
    py-6 flex flex-col items-center justify-between`}>
      <div className='w-full'>
        {
            type === "doctor"? 
            doctorSidebarElements.top.map((nav, index) => renderNavigation(nav, index)) : 
            patientSidebarElements.top.map((nav, index) => renderNavigation(nav, index))
        }
      </div>
      <div className='w-full'>
        {
            type === "doctor"? 
            doctorSidebarElements.bottom.map((nav, index) => renderNavigation(nav, index)) : 
            patientSidebarElements.bottom.map((nav, index) => renderNavigation(nav, index))
        }
        <SignOutButton redirectUrl='/'/>
      </div>
    </aside>
  )
}

export default Sidebar
