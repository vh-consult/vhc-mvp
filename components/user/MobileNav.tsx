'use client'

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { HeaderProps } from "./Header"

import { useUserStore } from "@/stores/user-store"

const MobileNav = ({navigations}: HeaderProps) => {
  const {user} = useUserStore()
  const userNavs = [
    {
      route: `${user?._id}/account`,
      label: 'Account'
    },
    {
      route: `${user?._id}/history`,
      label: 'History'
    },
  ]
  const pathname = usePathname()
  return (
    <section className='w-full max-w-[264px] '>
      <Sheet>
        <SheetTrigger asChild>
          <Image 
            width={30}
            height={30}
            alt='menu icon'
            className='cursor-pointer sm:hidden'
            src={'/icons/hamburger.svg'}
          />
        </SheetTrigger>
        <SheetContent 
          side='left' 
          className='border-none bg-white'
        >
          <Link href={"/"} className='flex items-center gap-1'>
            <Image
              src='/logo.svg'
              alt='logo'
              width={32}
              height={32}
              className='max-sm:size-10'
            />
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col gap-6 pt-16 text-white">
            <section className="flex h-full flex-col gap-6 pt-16 text-white">
              <SheetClose asChild>
              {
                navigations && navigations.map((link)=>{
                  const isActive = pathname === link.route;
                  return(
                        <Link
                            href={link.route}
                            key={link.label}
                            className={
                                cn(
                                    'flex gap-4 items-center p-4 rounded-lg w-full max-w-60',
                                    {
                                        'bg-accent': isActive
                                    }
                                )
                            }
                        >
                          <p className="font-semibold">
                              {link.label}
                          </p>
                        </Link>
                )})
              }
              {
                userNavs.map((link)=> {
                  const isActive = pathname === link.route;
                  return(
                  <Link
                    key={link.label}
                      href={link.route}
                      className={
                          cn(
                              'flex gap-4 items-center p-4 rounded-lg w-full max-w-60',
                              {
                                  'bg-accent': isActive
                              }
                          )
                      }
                  >
                    <p className="font-semibold">
                        {link.label}
                    </p>
                  </Link>
                  )
                })
              }
              </SheetClose>
            </section>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
