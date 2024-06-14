import { StreamVideoProvider } from '@/providers/StreamClientProvider'
import React, { ReactNode } from 'react'

const ConsultationLayout = ({children}:{children:ReactNode}) => {
  return (
    <main className='w-full min-h-screen bg-dark-2 text-sky-2'>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  ) 
}

export default ConsultationLayout
