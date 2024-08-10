import Header, { NavLinkProps } from '@/components/user/Header'
import React, { ReactNode } from 'react'

const navs:Array<NavLinkProps> = [
  {
    label: 'Home',
    route: '/blogs/home'
  },
  {
    label: 'My blogs',
    route: '/blogs/created'
  },
  {
    label: 'Saved',
    route: '/blogs/saved'
  },
]

const RootLayout = ({
  children
}: {children:ReactNode}) => {
  return (
    <>
      <Header
        navigations={navs}
      />
    {/* <main className='w-full min-h-screen bg-dark-2 text-green-1 '> */}
      <div className="px-8 py-4">
      {children}
 
      </div>
    {/* </main> */}
    </>
  )
}

export default RootLayout
