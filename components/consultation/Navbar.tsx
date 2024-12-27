"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className='flex flex-between fixed z-50 w-full bg-white px-6 py-4 lg:px-10'>
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


      <div className="flex-between gap-5">
        
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar
