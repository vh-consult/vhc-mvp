"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { SignedIn, UserButton, useUser } from '@clerk/nextjs'
import MobileNav from './user/MobileNav'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import SearchBar from './SearchBar'
import { AiOutlineMessage } from 'react-icons/ai'

export interface NavLinkProps {
  route: string;
  label: string;
}

interface HeaderProps {
  navigations?: Array<NavLinkProps>
}


const Header = ({navigations}: HeaderProps) => {
  const pathname = usePathname()
  const {isLoaded} = useUser()
  return (
    <nav className='flex flex-between sticky top-0 left-0 h-16 z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <div className="w-2/5 flex flex-between ">
        <Link href={"/"} className='flex items-center gap-1'>
          <div className="w-5/6">
            <Image
              src='/logo.svg'
              alt='logo'
              width={32}
              height={32}
              className='max-sm:size-10 w-full object-cover'
            />
          
          </div>
        </Link>
        
        <div className=" w-2/5 ">
          <ul className='flex flex-row flex-between text-green-1'>
            {
              navigations?.map((nav,index)=>{
                const activeLink = pathname === nav.route
                return(
                  <li key={index}>
                    <Link
                      href={nav.route}
                      className={` font-normal text-sm hover:text-green-2 ${activeLink ? `text-green-2 font-semibold`: ``}`}
                    >
                      {nav.label}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>



      <div className="flex items-center justify-end gap-3 w-2/5 ">

        <SearchBar 
          className='border border-dark-1 bg-dark-3 
            w-[250px]'
        />
        <AiOutlineMessage 
          className='text-green-1 
          cursor-pointer w-[30px] h-[30px]' 
        />
        {
          isLoaded? (
          <SignedIn>
              <UserButton/>
          </SignedIn>
          ):
          (
            <div 
            className='w-[30px] h-[30px] bg-dark-3 rounded-full'
          >
          </div>
          )
        }
        
        <div className="hidden">
        <MobileNav />

        </div>

      </div>
    </nav>
  )
}

export default Header
