import { cn } from '@/lib/utils'
import React from 'react'

const PharmacyGeneralLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className={cn('')}>
      {children}
    </main>
  )
}

export default PharmacyGeneralLayout
