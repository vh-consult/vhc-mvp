import RenderHeaderBasedOnRole from '@/components/consultation/RenderHeaderBasedOnRole'
import { StreamVideoProvider } from '@/providers/StreamTypeProvider'
import React from 'react'


const VideoLayout = ({children}: {children: React.ReactNode}) => {

  return (
    <StreamVideoProvider>
      <RenderHeaderBasedOnRole/>
      <div className="w-full min-h-[calc(100vh-65px)] px-10 py-4 bg-secondary">
        {children}
      </div>
    </StreamVideoProvider>
  )
}

export default VideoLayout
