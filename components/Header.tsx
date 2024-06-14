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
    <nav className='flex flex-between h-16 fixed z-50 w-full bg-dark-2 px-6 py-4 lg:px-10'>
      <div className="w-2/5 flex flex-between ">
        {
          pathname.startsWith('/pharmacy/') ? (
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
          ): 
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
        }

        <div className=" w-2/5 ">
          <ul className='flex flex-row flex-between text-green-1'>
            {
              navigations?.map((nav,index)=>{
                const activeLink = pathname === nav.route
                return(
                  <li key={index}>
                    <Link
                      href={nav.route}
                      className={` font-normal text-sm ${activeLink ? `text-green-2 font-semibold`: ``}`}
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



      <div className="flex flex-between gap-5 w-2/5 ">

        <SearchBar 
          className='border border-dark-1 bg-dark-3 
            w-[80%]'
        />
        <AiOutlineMessage 
          className='text-green-1 
          cursor-pointer w-[30px] h-[30px]' 
        />
        <SignedIn>
          <UserButton/>
        </SignedIn>
        
        <div className="hidden">
        <MobileNav />

        </div>

      </div>
    </nav>
  )
}

export default Header
