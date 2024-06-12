import Header from '@/components/Header'
import { cn } from '@/lib/utils'
import React from 'react'

const PharmacyGeneralLayout = ({children}: {children: React.ReactNode}) => {
  const navs = [
    {
      route: '/pharmacy/home',
      label: 'Home'
    },
    {
      route: '/pharmacy/cart',
      label: 'Cart'
    },
    {
      route: '/pharmacy/orders',
      label: 'Orders'
    },
  ]
  
  return (
    <main className={cn('bg-dark-1 w-full min-h-screen text-sky-3')}>
      <Header 
        navigations={navs}
      />
      {children}
    </main>
  )
}

export default PharmacyGeneralLayout
