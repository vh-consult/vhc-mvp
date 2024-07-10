import { StreamVideoProvider } from '@/providers/StreamTypeProvider'
import React from 'react'

const VideoLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <StreamVideoProvider>
      {children}
    </StreamVideoProvider>
  )
}

export default VideoLayout
