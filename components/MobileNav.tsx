import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import Image from 'next/image'
import { BiMenu } from 'react-icons/bi'

const MobileNav = () => {
  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger asChild>
          <BiMenu 
            className='cursor-pointer sm:hidden'

          />
        </SheetTrigger>
        <SheetContent 
          side='left' 
          className='border-none bg-dark-1'
        >
          
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
