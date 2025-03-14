"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { IconType } from 'react-icons'
import { AiOutlineHistory } from 'react-icons/ai'
import { BiMenu, BiSolidUserAccount } from 'react-icons/bi'
import { BsDatabase, BsHospital, BsPeople } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import {  MdMeetingRoom, MdOutlineSchedule, MdOutlineSettings } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'

import { useUserStore } from '@/stores/user-store'

interface SideNavProps {
    icon: IconType;
    label: string;
    route: string;
}

const Sidebar = () => {
    const pathname = usePathname()
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const {user} = useUserStore()    
    console.log("user", user)
    const patientSidebarElements = {
      top: [
          {
              route: `/${user?._id}/dashboard`,
              label: 'Dashboard',
              icon: RxDashboard
          },
          {
              route: `/${user?._id}/affiliation`,
              label: `Affiliation`,
              icon: BsHospital
          },
          {
              route: `/${user?._id}/health-record`,
              label: `Record`,
              icon: BsDatabase
          },
      ],
  }
  

  const SidebarBbottomNavs = [
    {
        route: `/${user?._id}/history`,
        label: 'History',
        icon: AiOutlineHistory
    },
    {
        route: `/${user?._id}/account`,
        label: 'Account',
        icon: CgProfile
    },
]

    const renderNavigation = (nav: SideNavProps, index: number) => {
        const isActive = pathname === nav.route || pathname.startsWith(`${nav.route}/`);
        return (
          <Link 
            href={nav.route} 
            key={index} 
            className={`flex ${isExpanded? ` flex-row items-center p-3 ` : 
              `flex-col mb-4 hover:rounded-lg hover:mx-auto 
              items-center py-3 hover:w-[85%] `}  
                hover:bg-secondary ${isActive? `bg-accent ${isExpanded? 'w-full': 'w-[85%] rounded-lg'} 
              mx-auto  hover:w-[100%]  text-secondary hover:bg-accent hover:opacity-90`:
             'text-dark'}
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
    <aside className={`${isExpanded? `w-[170px]`: `w-[80px]`} h-[calc(100vh-64px)]  fixed top-16 left-0 bg-white
    py-3 flex flex-col items-center justify-between z-[10]`}
    onMouseLeave={()=>setIsExpanded(false)} onMouseEnter={()=>setIsExpanded(!isExpanded)}
    >
      <div className='w-full'>
        <div 
          className={` w-[30px] h-[30px] flex flex-center mt-[-20px] ml-6 cursor-pointer`}
          onClick={()=>setIsExpanded(!isExpanded)}
        >
          <BiMenu className='w-[24px] h-[24px]' />

        </div>
        {
          user?.type === "Patient"? 
          patientSidebarElements.top.map((nav, index) => renderNavigation(nav, index)) : ''
        }
      </div>
      <div className='w-full'>
            { SidebarBbottomNavs.map((nav, index) => renderNavigation(nav, index)) }
      </div>
    </aside>
  )
}

export default Sidebar
