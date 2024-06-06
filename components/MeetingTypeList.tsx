'use client'

import { useState } from "react"
import HomeCard from "./HomeCard"
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";


const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
  
  const createSession = () => {

  }
  
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <HomeCard 
            imgURL= '/icons/add-meeting.svg'
            title= 'New Session'
            description= 'Start an instant session'
            className="bg-violet-1"
            handleClick= {() => setMeetingState('isInstantMeeting')}
        />
        <HomeCard 
            imgURL= '/icons/join-meeting.svg'
            title= 'Join Consultation Room'
            description= 'via invitation link'
            className="bg-green-1"
            handleClick= {() => setMeetingState('isJoiningMeeting')}
        />
        <HomeCard 
            imgURL= '/icons/schedule.svg'
            title= 'Schedule Consultation Session'
            description= 'Plan a session'
            className="bg-purple-1"
            handleClick= {() => setMeetingState('isScheduleMeeting')}
        />
        <HomeCard 
            imgURL= '/icons/recordings.svg'
            title= 'View Recorded Sessions'
            className="bg-blue-1"
            description= 'Checkout recorded meetings'
            handleClick= {() => router.push('/recordings')}
        />

        <MeetingModal
            isOpen={meetingState === 'isInstantMeeting'}
            onClose={() => setMeetingState(undefined)}
            title='Start an emergency consultation'
            className='text-center'
            buttonText='Start session'
            handleClick={createSession}
        />
    </section>
  )
}

export default MeetingTypeList
