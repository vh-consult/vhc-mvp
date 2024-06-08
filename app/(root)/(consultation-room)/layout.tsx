import { StreamVideoProvider } from '@/providers/StreamClientProvider'
import React, { ReactNode } from 'react'

const ConsultationLayout = ({children}:{children:ReactNode}) => {
  return (
    <main className='bg-dark-1'>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  ) 
}

export default ConsultationLayout
