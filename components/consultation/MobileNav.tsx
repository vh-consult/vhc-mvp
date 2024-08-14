'use client'

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const consultationSidebarLinks = [
  {
    imgURL: '/icons/Home.svg',
    route: `/consultation/home`,
    label: 'Home',
  },

  {
    imgURL: '/icons/upcoming.svg',
    route: `/consultation/upcoming`,
    label: 'Upcoming',
  },
  {
    imgURL: '/icons/Video.svg',
    route: `/consultation/recordings`,
    label: 'Recordings',
  },
];

const MobileNav = () => {
  const pathname = usePathname()
  return (
    <section className='w-full max-w-[264px]'>
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
              width={250}
              height={40}
              className='object-cover '
            />
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col gap-6 pt-8 text-white">
            <section className="flex h-full flex-col gap-6 pt-4 text-white">
            {
            consultationSidebarLinks.map((link)=>{
              const isActive = pathname === link.route;
              return(
                <SheetClose asChild key={link.route}>
                    <Link
                        href={link.route}
                        key={link.label}
                        className={
                            cn(
                                'flex gap-4 items-center p-4 rounded-lg w-full max-w-60',
                                {
                                    'bg-blue-1': isActive
                                }
                            )
                        }
                    >
                        <Image 
                            src={link.imgURL}
                            alt={link.label}
                            width={18}
                            height={18}
                        />
                        <p className="font-semibold">
                            {link.label}
                        </p>
                    </Link>
                </SheetClose>
              )
            })
        }
            </section>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
