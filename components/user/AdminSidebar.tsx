"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { IconType } from 'react-icons'
import { AiOutlineOrderedList } from 'react-icons/ai'
import { BiSolidInstitution } from 'react-icons/bi'
import { FaAffiliatetheme } from 'react-icons/fa'
import { MdMedicalInformation, MdMeetingRoom, MdMessage, MdOutlineHome, MdOutlineInventory, MdOutlineLocalPharmacy, MdOutlineSettings, MdPeopleOutline } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'

import { useUserStore } from '@/stores/user-store'

export interface SideNavProps {
  icon: IconType;
  label: string;
  route: string;
}


const AdminSidebar = () => {
  const pathname = usePathname()
  const {user} = useUserStore()

  const renderNavigation = (nav: SideNavProps, index: number) => {
    const isActive = pathname === nav.route || pathname.startsWith(`${nav.route}/`);
    return (
      <Link 
        href={nav.route} 
        key={index} 
        className={`flex flex-row items-center p-3          
            hover:bg-secondary ${isActive? `bg-accent 
           hover:bg-accent hover:opacity-90 text-secondary `:
         'text-dark hover:bg-secondary '}
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
            route: `/company/${user?.company}/overview`,
            label: `Overview`,
            icon: RxDashboard
        },
        {
          route: `/company/${user?.company}/orders`,
          label: `Orders`,
          icon: AiOutlineOrderedList
        },
        {
          route: `/company/${user?.company}/inventory`,
          label: `Inventory`,
          icon: MdOutlineInventory
        },
        // {
        //     route: `/company/${user?.company}/messages`,
        //     label: `Messages`,
        //     icon: MdMessage
        // },
    ],
  }
  
  const hospitalSidebarElements = {
    top: [
        {
            route: `/company/${user?.company}/overview`,
            label: `Overview`,
            icon: RxDashboard
        },
        {
            route: `/company/${user?.company}/consultation`,
            label: `Consultation`,
            icon: MdMeetingRoom
        },
        {
            route: `/company/${user?.company}/clients`,
            label: `Clients`,
            icon: MdPeopleOutline
        },
        {
            route: `/company/${user?.company}/affiliates`,
            label: `Affilates`,
            icon: FaAffiliatetheme
        },
    ],
  }
  const bottomNav = [
    {
        route: `/company/${user?.company}/about`,
        label: 'About Us',
        icon: BiSolidInstitution
    },
    {
      route: `/blogs/home`,
      label: 'Blogging',
      icon: MdMedicalInformation
  },
]
  return (
    <aside className={`w-[170px] h-[calc(100vh-64px)] sticky left-0 top-[64px] bg-white z-40 flex flex-col flex-between py-4`}
    >
      <div className='w-full'>
        {
            user?.type === "HospitalAdmin"?
            hospitalSidebarElements.top.map((nav, index) => renderNavigation(nav, index)) : 
            user?.type === "PharmacyAdmin"?
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
