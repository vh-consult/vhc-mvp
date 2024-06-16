"use client"
import { SidebarBbottomNavs, doctorSidebarElements, hospitalSidebarElements, patientSidebarElements, pharmacySidebarElements } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IconType } from 'react-icons'
import { BiMenu } from 'react-icons/bi'

interface SideNavProps {
    icon: IconType;
    label: string;
    route: string;
}

const Sidebar = () => {
    const pathname = usePathname()
    const [userRole, setUserRole] = useState<string | null>(null)
    const { user } = useUser()
    const [isExpanded, setIsExpanded] = useState<boolean>(false)


    const renderNavigation = (nav: SideNavProps, index: number) => {
        const isActive = pathname === nav.route || pathname.startsWith(`${nav.route}/`);
        return (
          <Link 
            href={nav.route} 
            key={index} 
            className={`flex ${isExpanded? ` flex-row items-center p-3 ` : 
              `flex-col mb-4 hover:rounded-lg hover:mx-auto 
              items-center py-3 hover:w-[85%] `}  
                hover:bg-dark-4 ${isActive? `bg-dark-3 w-[85%] 
              mx-auto rounded-lg hover:w-[85%]`:
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
      useEffect(() => {
        const getUser = async () => {
          if (user?.id) {
            const userFromDB = await getUserById(user.id)
            setUserRole(userFromDB.role)
            console.log(userFromDB.role)
          }
        }
        getUser()
      }, [user])
  return (
    <aside className={`${isExpanded? `w-[170px]`: `w-[80px]`} h-[calc(100vh-64px)]  fixed top-16 left-0 bg-dark-1
    py-3 flex flex-col items-center justify-between`}
    onMouseLeave={()=>setIsExpanded(false)}
    >
      <div className='w-full'>
        <div 
          className={` w-[30px] h-[30px] flex flex-center mt-[-15px] ml-6 cursor-pointer`}
          onClick={()=>setIsExpanded(!isExpanded)}
        >
          <BiMenu className='w-[24px] h-[24px]' />

        </div>
        {
            userRole === "doctor"? 
            doctorSidebarElements.top.map((nav, index) => renderNavigation(nav, index)) : 
            userRole === "patient"? 
            patientSidebarElements.top.map((nav, index) => renderNavigation(nav, index)) :
            userRole === "hospitalAdmin"?
            hospitalSidebarElements.top.map((nav, index) => renderNavigation(nav, index)) : 
            pharmacySidebarElements.top.map((nav, index) => renderNavigation(nav, index)) 

        }
      </div>
      <div className='w-full'>
            { SidebarBbottomNavs.map((nav, index) => renderNavigation(nav, index)) }
      </div>
    </aside>
  )
}

export default Sidebar
