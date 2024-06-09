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
              hover:rounded-lg hover:mx-auto hover:bg-white 
              hover:${type === "patient"? `bg-blue-1`: 'bg-purple-1'}
              ${isActive? `bg-white ${type === "patient"? `bg-blue-1`: 'bg-purple-1'} w-[85%] mx-auto rounded-lg`:
             'text-white'}
            `}
          >
            <div>{<nav.icon/>}</div>
            <span className={`${isActive? 'font-medium' : ''} text-[12px] `}>{nav.label}</span>
          </Link>
        );
      };
  return (
    <aside className={`w-[80px] h-full fixed top-0 left-0 ${type === "patient"? `bg-blue-1`: 'bg-purple-1'}
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
        {/* <UserButton afterSignOutUrl='/'/> */}
      </div>
    </aside>
  )
}

export default Sidebar
