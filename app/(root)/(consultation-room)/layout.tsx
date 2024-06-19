import { StreamVideoProvider } from '@/providers/StreamVideoProvider'
import React, { ReactNode } from 'react'

const ConsultationLayout = ({children}:{children:ReactNode}) => {
  return (
    <main className='w-full min-h-screen bg-dark-2 text-green-1'>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  ) 
}

export default ConsultationLayout
