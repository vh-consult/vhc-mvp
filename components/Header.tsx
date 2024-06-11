"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SignedIn, UserButton } from '@clerk/nextjs'
import MobileNav from './user/MobileNav'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import SearchBar from './SearchBar'
import { AiOutlineMessage } from 'react-icons/ai'

interface NavLinkProps {
  route: string;
  label: string;
}

interface HeaderProps {
  navigations?: Array<NavLinkProps>
}

const Header = ({navigations}: HeaderProps) => {
  const pathname = usePathname()
  return (
    <nav className='flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href={"/"} className='flex items-center gap-1'>
        <Image
          src='/favicon.svg'
          alt='logo'
          width={32}
          height={32}
          className='max-sm:size-10'
        />
        <p className='font-bold text-2xl text-white'>
          V-Consultation
        </p>
      </Link>

      <div className="flex flex-between">
        <ul>
          {
            navigations?.map((nav,index)=>{
              const activeLink = pathname === nav.route
              return(
                <li key={index}>
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
          <SearchBar 
            className='border border-gray-200 
            rounded-lg'
          />
          <AiOutlineMessage 
            className='text-patientTextColor 
            cursor-pointer w-[24px] h-[24px]' 
          />
          <UserButton/>
        </SignedIn>


        <MobileNav />
      </div>
    </nav>
  )
}

export default Header
