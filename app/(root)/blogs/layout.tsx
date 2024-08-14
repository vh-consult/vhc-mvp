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

const BlogLayout = ({
  children
}: {children:ReactNode}) => {
  return (
    <main className='bg-green-3 text-green-4 '>
      <Header
        navigations={navs}
      />
      <div className="px-8 py-4 w-full min-h-[calc(100vh-64px)]">
      {children}

      </div>
    </main>
  )
}

export default BlogLayout
