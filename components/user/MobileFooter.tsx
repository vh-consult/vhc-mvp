import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface FooterNavProps  {
  route: string;
  activeRouteIcon: JSX.Element;
  inactiveRouteIcon: JSX.Element;
}

const MobileFooter = (navigations : Array<FooterNavProps>) => {
  const pathname = usePathname()
  
  return (
    <div className='h-[40px] w-full md:hidden'>
      {
        navigations.map((nav, index) => {
          const isActive = pathname === nav.route;
          return(
            <Link 
              href={nav.route} 
              key={index} 
              className=''
            >
              <span className="" >
                {
                  isActive? 
                  (nav.activeRouteIcon) : 
                  (nav.inactiveRouteIcon)
                }
              </span>
            </Link>
          )
        })
      }
    </div>
  )
}

export default MobileFooter
