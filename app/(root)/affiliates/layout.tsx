import Header from '@/components/user/Header'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
    return (
      <main className='w-full min-h-screen bg-secondary text-dark'>
        <Header />
        {children}
      </main>
    )
  }

export default layout
