import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SignedIn, UserButton } from '@clerk/nextjs'
import MobileNav from './MobileNav'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  route: string;
  label: string;
}

interface NavBarProps {
  navigations?: Array<NavLinkProps>
}

const Navbar = ({navigations}: NavBarProps) => {
  const pathname = usePathname()
  return (
    <nav className='flex flex-between fixed z-50 w-full bg-dark-1 px-6 y-4 lg:px-10'>
      <Link href={"/"} className='flex items-center gap-1'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={32}
          height={32}
          className='max-sm:size-10'
        />
      </Link>

      <div className="w-full flex flex-between">
        <ul>
          {
            navigations?.map((nav)=>{
              const activeLink = pathname === nav.route
              return(
                <li>
                  <Link
                    href={nav.route}
                    className={` font-normal text-sm ${activeLink ? `text-green-2 font-medium`: ``}`}
                  >
                    {nav.label}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton/>
        </SignedIn>


        <MobileNav usedAt='consultation-page' />
      </div>
    </nav>
  )
}

export default Navbar
