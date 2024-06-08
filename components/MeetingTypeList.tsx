'use client'

import { useState } from "react"
import HomeCard from "./HomeCard"
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "./ui/use-toast";


const MeetingTypeList = () => {
    const router = useRouter();
    const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
  
    const {user} = useUser();
    const client = useStreamVideoClient();
    const [values, setValues] = useState({
        dateTime: new Date(),
        link: '',
        description: ''
    })
    const [callDetails, setCallDetails] = useState<Call>()
    const {toast} = useToast()
    const createSession = async () => {
    if(!client || !user) return

    try {
        if (!values.dateTime) {
            toast({
                title: "Please select a date and time"
            })
            return;
        }

        const id = crypto.randomUUID();
        const call = client.call('default', id);

        if(!call) throw new Error('Failed to create call');

        const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString()
        const description = values.description || 'Emergency session'

        await call.getOrCreate({
            data: {
                starts_at: startsAt,
                custom: {
                    description
                }
            }
        })
        setCallDetails(call);

        if (!values.description) {
            router.push(`/meeting/${call.id}`)
        }
        toast({
            title: "Meeting created"
        })
    } catch (error) {
        console.log(error);
        toast({
            title: "Failed tocreate session"
        })
    }
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
            className="bg-green-2 "
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
              className='text-center '
              buttonText='Start session'
              handleClick={createSession}      
        />
    </section>
  )
}

export default MeetingTypeList
