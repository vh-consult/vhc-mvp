'use client'

import { useState } from "react"
import HomeCard from "./HomeCard"
import { useRouter } from "next/navigation";


const MeetingTypeList = () => {
  const router = useRouter();

  const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
  
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <HomeCard 
            imgURL= '/icons/add-meeting.svg'
            title= 'New Meeting'
            description= 'Start an instant meeting'
            className="bg-violet-1"
            handleClick= {() => setMeetingState('isJoiningMeeting')}
        />
        <HomeCard 
            imgURL= '/icons/join-meeting.svg'
            title= 'Join Meeting'
            description= 'Join a scheduled meeting'
            className="bg-green-1"
            handleClick= {() => setMeetingState('isJoiningMeeting')}
        />
        <HomeCard 
            imgURL= '/icons/schedule.svg'
            title= 'Schedule Meeting'
            description= 'Plan your meeting'
            className="bg-purple-1"
            handleClick= {() => setMeetingState('isScheduleMeeting')}
        />
        <HomeCard 
            imgURL= '/icons/recordings.svg'
            title= 'View Recordings'
            className="bg-blue-1"
            description= 'Checkout recorded meetings'
            handleClick= {() => router.push('/recordings')}
        />
    </section>
  )
}

export default MeetingTypeList
