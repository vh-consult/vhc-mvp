import Header from '@/components/user/Header'
import Sidebar from '@/components/user/Sidebar';
import { StreamVideoProvider } from '@/providers/StreamTypeProvider'
import React from 'react'


const VideoLayout = ({children}: {children: React.ReactNode}) => {
  const consultationSidebarLinks = [
    {
      imgURL: '/icons/Home.svg',
      route: `/consultation/home`,
      label: 'Home',
    },
  
    {
      imgURL: '/icons/upcoming.svg',
      route: `/consultation/upcoming`,
      label: 'Upcoming',
    },
    {
      imgURL: '/icons/Video.svg',
      route: `/consultation/recordings`,
      label: 'Recordings',
    },
  ];
  return (
    <StreamVideoProvider>
        <Header
          navigations={
            consultationSidebarLinks
          }
        />
      <div className="w-full min-h-[calc(100vh-65px)] px-10 py-4 bg-green-3">
        {children}
      </div>
    </StreamVideoProvider>
  )
}

export default VideoLayout
