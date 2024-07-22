"use client"
import useDBUser from '@/hooks/useDBUser'
import { getUser } from '@/lib/actions/user.actions'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IconType } from 'react-icons'
import { AiOutlineHistory } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'
import { BsDatabase, BsPeople } from 'react-icons/bs'
import { MdMeetingRoom, MdOutlineSchedule, MdOutlineSettings } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'

interface SideNavProps {
    icon: IconType;
    label: string;
    route: string;
}

const Sidebar = () => {
    const pathname = usePathname()
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const {role, clerkId} = useDBUser()
    
    const patientSidebarElements = {
      top: [
          {
              route: `/user/${clerkId}/dashboard`,
              label: 'Dashboard',
              icon: RxDashboard
          },
          {
              route: `/user/${clerkId}/consultation`,
            label: `Consultation`,
              icon: MdMeetingRoom
          },
          {
              route: `/user/${clerkId}/bookings`,
              label: `Bookings`,
              icon: MdOutlineSchedule
          },
          {
              route: `/user/${clerkId}/health-record`,
              label: `Record`,
              icon: BsDatabase
          },
      ],
  }
  
  const pharmacySidebarElements = {
      top: [
          {
              route: `/user/${clerkId}/dashboard`,
              label: `Dashboard`,
              icon: RxDashboard
          },
          {
              route: `/user/${clerkId}/consultation`,
              label: `Consultation`,
              icon: MdMeetingRoom
          },
          {
              route: `/user/${clerkId}/bookings`,
              label: `Bookings`,
              icon: MdOutlineSchedule
          },
          {
              route: `/user/${clerkId}/health-record`,
              label: `Record`,
              icon: BsDatabase
          },
      ],
  }
  
  const hospitalSidebarElements = {
      top: [
          {
              route: `/user/${clerkId}/dashboard`,
              label: `Dashboard`,
              icon: RxDashboard
          },
          {
              route: `/user/${clerkId}/consultation`,
              label: `Consultation`,
              icon: MdMeetingRoom
          },
          {
              route: `/user/${clerkId}/bookings`,
              label: `Bookings`,
              icon: MdOutlineSchedule
          },
          {
              route: `/user/${clerkId}/health-record`,
              label: `Record`,
              icon: BsDatabase
          },
      ],
  }
  const SidebarBbottomNavs = [
    {
        route: `/user/${clerkId}/history`,
        label: 'History',
        icon: AiOutlineHistory
    },
    {
        route: `/user/${clerkId}/settings`,
        label: 'Settings',
        icon: MdOutlineSettings
    },
]
  const doctorSidebarElements = {
      top: [
          {
              route: `/user/${clerkId}/dashboard`,
              label: `Dashboard`,
              icon: RxDashboard
          },
          {
              route: `/user/${clerkId}/consultation`,
              label: `Consultation`,
              icon: MdMeetingRoom
          },
          {
              route: `/user/${clerkId}/clients`,
              label: `Clients`,
              icon: BsPeople
          }
      ],
  }
    const renderNavigation = (nav: SideNavProps, index: number) => {
        const isActive = pathname === nav.route || pathname.startsWith(`${nav.route}/`);
        return (
          <Link 
            href={nav.route} 
            key={index} 
            className={`flex ${isExpanded? ` flex-row items-center p-3 ` : 
              `flex-col mb-4 hover:rounded-lg hover:mx-auto 
              items-center py-3 hover:w-[85%] `}  
                hover:bg-dark-3 ${isActive? `bg-dark-4 w-[85%] 
              mx-auto rounded-lg hover:w-[100%]   hover:bg-dark-4 hover:opacity-90`:
             'text-green-1'}
            `}
            
          >
            <div>{<nav.icon className={`w-[20px] h-[20px]`}/>}</div>

            <span className={`${isActive? 'font-medium' : ''} 
             ${isExpanded? `ml-3 text-base`: ` mt-1 text-[10px]`}
             `}>
              {nav.label}
            </span>
          </Link>
        );
      };
  return (
    <aside className={`${isExpanded? `w-[170px]`: `w-[80px]`} h-[calc(100vh-64px)]  fixed top-16 left-0 bg-dark-1
    py-3 flex flex-col items-center justify-between z-[1000000]`}
    onMouseLeave={()=>setIsExpanded(false)}
    >
      <div className='w-full'>
        {/* <div 
          className={` w-[30px] h-[30px] flex flex-center mt-[-20px] ml-6 cursor-pointer`}
          onClick={()=>setIsExpanded(!isExpanded)}
        >
          <BiMenu className='w-[24px] h-[24px]' />

        </div> */}
        {
            role === "Doctor"? 
            doctorSidebarElements.top.map((nav, index) => renderNavigation(nav, index)) : 
            role === "Patient"? 
            patientSidebarElements.top.map((nav, index) => renderNavigation(nav, index)) :
            role === "HospitalAdmin"?
            hospitalSidebarElements.top.map((nav, index) => renderNavigation(nav, index)) : 
            role === "PharmacyAdmin"?
            pharmacySidebarElements.top.map((nav, index) => renderNavigation(nav, index)) : ``
        }
      </div>
      <div className='w-full'>
            { SidebarBbottomNavs.map((nav, index) => renderNavigation(nav, index)) }
      </div>
    </aside>
  )
}

export default Sidebar
