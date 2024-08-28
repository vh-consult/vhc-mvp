"use client"
import React, {useEffect, useState} from 'react'
import { fetchOngoing } from '@/lib/actions/doctor.actions'
import OngoingNotification from './OngoingNotification'
import useDBUser from '@/hooks/useDBUser'
import { AppointmentDataType } from '../doctor/DoctorDashboard'

const OngoingConsultationAlert = async () => {
  const {clerkId} = useDBUser()
  const [ongoing, setOngoing] = useState<AppointmentDataType | undefined>(undefined)
  useEffect(() => {
    if (!clerkId) return;
    const fetch = async() => {
      const ongoing = await fetchOngoing(clerkId)
      console.log(ongoing)
      setOngoing(ongoing)
    }
    fetch()
  }, [clerkId])
  return (
    <div className="w-full">
    {
      ongoing !== undefined ? (
<></>
      ): (
        <span className="size-full flex flex-center">No ongoing session</span>
      )  
    }
  </div>
  )
}

export default OngoingConsultationAlert
