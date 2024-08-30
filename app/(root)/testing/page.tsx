"use client"
import ConsultationSummaryCard from '@/components/consultation/ConsultationSummaryCard'
import HealthRecordPreview from '@/components/consultation/HealthRecordPreview'
import RecordCard from '@/components/patient/RecordCard'
import React, { useCallback, useEffect, useState } from 'react'

const page = () => {
  // const [show, setShow] = useState(false)
  // const sendNotification = () => {
  //   if ('Notification' in window && Notification.permission === 'granted') {
  //     const notification = new Notification('Ongoing Consultation', {
  //       body: `Click to open `,
  //       tag: 'consultation started'
  //     })
  //     notification.addEventListener('click', () => {
  //       setShow(true)
  //     })
  //   }
  // }

  // const requestNotificationPermission = useCallback(() => {
  //   if ('Notification' in window) {
  //     Notification.requestPermission().then(function (permission){
  //       if (permission === 'granted') {
  //         console.log('Permission granted')
  //         sendNotification( )        
  //       }
  //     })
  //   }
    
  // }, [])

  // useEffect(() => {
  //   if ('Notification' in window) {
  //     requestNotificationPermission();
  //   }
  // }, [requestNotificationPermission])

  return (
    <div className='flex flex-center pt-[25%]'>
      {/* <ConsultationSummaryCard consultationId='66d09bd3b68085d73829b0e4'/>
      <HealthRecordPreview patientId='66c73bfb4615edace4459014'/> */}
      <RecordCard/>
    </div>
  )
}

export default page
