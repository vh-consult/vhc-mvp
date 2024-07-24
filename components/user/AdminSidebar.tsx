"use client"
import useDBUser from '@/hooks/useDBUser'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'
import { IconType } from 'react-icons'
import { AiOutlineHistory, AiOutlineOrderedList } from 'react-icons/ai'
import { FaAffiliatetheme } from 'react-icons/fa'
import { MdMeetingRoom, MdMessage, MdOutlineInventory, MdOutlineLocalPharmacy, MdOutlineSettings, MdPeopleOutline } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'

export interface SideNavProps {
  icon: IconType;
  label: string;
  route: string;
}



const AdminSidebar = () => {
  const pathname = usePathname()
  const {role, clerkId, companyId} = useDBUser()

  const renderNavigation = (nav: SideNavProps, index: number) => {
    const isActive = pathname === nav.route || pathname.startsWith(`${nav.route}/`);
    return (
      <Link 
        href={nav.route} 
        key={index} 
        className={`flex flex-row items-center p-3          
            hover:bg-blue-1 ${isActive? `bg-blue-1 
           hover:bg-blue-1 hover:opacity-90 text-blue-2 `:
         'text-blue-4 hover:bg-blue-2 '}
        `}
        
      >
        <div>{<nav.icon className={`w-[20px] h-[20px]`}/>}</div>

        <span className={`ml-4`}>
          {nav.label}
        </span>
      </Link>
    );
  };
  const pharmacySidebarElements = {
    top: [
        {
            route: `/company/${companyId}/overview`,
            label: `Overview`,
            icon: RxDashboard
        },
        {
          route: `/company/${companyId}/orders`,
          label: `Orders`,
          icon: AiOutlineOrderedList
        },
        {
          route: `/company/${companyId}/inventory`,
          label: `Inventory`,
          icon: MdOutlineInventory
        },
        {
            route: `/company/${companyId}/messages`,
            label: `Messages`,
            icon: MdMessage
        },
    ],
  }
  
  const hospitalSidebarElements = {
    top: [
        {
            route: `/company/${companyId}/overview`,
            label: `Overview`,
            icon: RxDashboard
        },
        {
            route: `/company/${companyId}/consultation`,
            label: `Consultation`,
            icon: MdMeetingRoom
        },
        {
            route: `/company/${companyId}/clients`,
            label: `Clients`,
            icon: MdPeopleOutline
        },
        {
            route: `/company/${companyId}/affiliates`,
            label: `Affilates`,
            icon: FaAffiliatetheme
        },
    ],
  }
  const bottomNav = [
    {
        route: `/company/${companyId}/history`,
        label: 'History',
        icon: AiOutlineHistory
    },
    {
        route: `/company/${companyId}/settings`,
        label: 'Settings',
        icon: MdOutlineSettings
    },
]
  return (
    <aside className={`w-[170px] h-[calc(100vh-64px)] bg-white  flex flex-col flex-between py-4`}
    >
      <div className='w-full'>
        {
            role === "HospitalAdmin"?
            hospitalSidebarElements.top.map((nav, index) => renderNavigation(nav, index)) : 
            role === "PharmacyAdmin"?
            pharmacySidebarElements.top.map((nav, index) => renderNavigation(nav, index)) : ``
        }
      </div>
      <div className='w-full'>
            { bottomNav.map((nav, index) => renderNavigation(nav, index)) }
      </div>
    </aside>
  )
}

export default AdminSidebar
