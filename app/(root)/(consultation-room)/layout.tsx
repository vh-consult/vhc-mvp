import { StreamVideoProvider } from '@/providers/StreamClientProvider'
import React, { ReactNode } from 'react'

const ConsultationLayout = ({children}:{children:ReactNode}) => {
  return (
    <main className=''>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  ) 
}

export default ConsultationLayout
