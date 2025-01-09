import Header from '@/components/user/Header'
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
    <main className={cn('bg-secondary w-full min-h-screen text-dark')}>
      <Header 
        navigations={navs}
      />
      {children}
    </main>
  )
}

export default PharmacyGeneralLayout
