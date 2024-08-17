"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { SignedIn, UserButton, useUser } from '@clerk/nextjs'
import MobileNav from './MobileNav'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import SearchBar from '../general/SearchBar'
import { MdOutlineNotifications } from 'react-icons/md'
import Message from '../message/Message'
import MessageList from '../message/MessageCardAndList'

export interface NavLinkProps {
  imageURL?: string;
  route: string;
  label: string;
}

export interface HeaderProps {
  className?: string;
  logo?: string;
  seachFieldStyles?: string;
  navigations?: Array<NavLinkProps>
}


const Header = ({navigations, seachFieldStyles, logo, className}: HeaderProps) => {
  const pathname = usePathname()
  const {isLoaded} = useUser()
  const [showNotifications, setshowNotifications] = useState<boolean>(false)
  return (
    <>
      <header className='sticky top-0 left-0'>
        <nav className={cn('flex flex-between h-16 z-50 w-full bg-white text-green-4 px-6 py-4 lg:px-5', className)}>
          <div className="w-2/5 flex flex-between ">
            <Link href={"/"} className='flex items-center gap-1'>
              <div className="w-5/6">
                <Image
                  src={logo !== undefined ? logo :'/logo.svg'}
                  alt='logo'
                  width={32}
                  height={32}
                  className=' w-[190px] h-[37px] object-cover'
                />
              
              </div>
            </Link>
            
            <div className=" w-1/2 ">
              <ul className='flex flex-row flex-between text-green-4'>
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



          <div className="flex items-center justify-end  gap-3 w-2/5 ">

            <SearchBar 
              className={
                cn(
                  'border bg-gray-100 hidden md:flex md:w-[250px]',
                  seachFieldStyles
                )}
            />
            {/* <Link href={'/chat'}>         */}
              <MdOutlineNotifications 
                className='text-inherit
                cursor-pointer w-[24px] h-[24px]' 
                onClick={()=>{
                  setshowNotifications(!showNotifications)
                }}
              />
            {/* </Link> */}
            {
              isLoaded? (
              <SignedIn>
                  <UserButton/>
              </SignedIn>
              ):
              (
                <div 
                className='w-[24px] h-[24px] bg-gray-100 rounded-full'
              >
              </div>
              )
            }
            
            <div className="hidden">
            <MobileNav />

            </div>

          </div>
        </nav>
        <div className="w-[350px] bg-inherit z-50 absolute right-5">
          {
            showNotifications? (
            <MessageList 
              className='bg-white hover:bg-gray-100 text-green-4'
            />): ''
          }
        </div>
      </header>
    </>
  )
}

export default Header
