import { fetchOngoing } from '@/lib/actions/doctor.actions'
import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import OngoingNotification from './OngoingNotification'

const OngoingConsultationAlert = async () => {
    const user = await currentUser()
    const ongoing = await fetchOngoing(user?.id as string)
  return (
    <div className="w-full">
    {
      ongoing === undefined ? (
        <span className="size-full flex flex-center">No ongoing session</span>
      ): (
        <OngoingNotification 
        startedAt={new Date(ongoing.date)} 
        patient={ongoing.patient.firstName + ' ' + ongoing.patient.lastName} 
        link={ongoing.link as string}
      />
      )  
    }
  </div>
  )
}

export default OngoingConsultationAlert
