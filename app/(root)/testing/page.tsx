"use client"
import ConsultationSummaryCard from '@/components/consultation/ConsultationSummaryCard'
import React, { useCallback, useEffect } from 'react'

const page = () => {
  const sendNotification = () => {
    if ('Notification' in window && Notification.permission === 'granted') {
      const notification = new Notification('Ongoing Consultation', {
        body: `Click to open `,
        tag: 'consultation started'
      })

    }
  }

  const requestNotificationPermission = useCallback(() => {
    if ('Notification' in window) {
      Notification.requestPermission().then(function (permission){
        if (permission === 'granted') {
          console.log('Permission granted')
          sendNotification( )        
        }
      })
    }
    
  }, [])

  useEffect(() => {
    if ('Notification' in window) {
      requestNotificationPermission();
    }
  }, [requestNotificationPermission])

  return (
    <></>
  )
}

export default page
