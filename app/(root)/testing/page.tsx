// "use client"
// import ConsultationSummaryCard from '@/components/consultation/ConsultationSummaryCard'
// import HealthRecordPreview from '@/components/consultation/HealthRecordPreview'
// import MedCard from '@/components/patient/MedCard'
// import RecordCard from '@/components/patient/RecordCard'
// import React, { useCallback, useEffect, useState } from 'react'

// const page = () => {
//   const [show, setShow] = useState(false)
//   const [show, setShow] = useState(false)
//   const sendNotification = () => {
//     if ('Notification' in window && Notification.permission === 'granted') {
//       const notification = new Notification('Ongoing Consultation', {
//         body: `Click to open `,
//         tag: 'consultation started'
//       })
//       notification.addEventListener('click', () => {
//         setShow(true)
//       })
//     }
//   }

//   const requestNotificationPermission = useCallback(() => {
//     if ('Notification' in window) {
//       Notification.requestPermission().then(function (permission){
//         if (permission === 'granted') {
//           console.log('Permission granted')
//           sendNotification( )        
//         }
//       })
//     }
    
//   }, [])

//   useEffect(() => {
//     if ('Notification' in window) {
//       requestNotificationPermission();
//     }
//   }, [requestNotificationPermission])

//   return (
//     <div className='flex flex-center pt-[2%]'>
//       <span className="" onClick={() => setShow(true)}>
//       <RecordCard/>
//       </span>
//       {
//         show === true? (
//           <ConsultationSummaryCard consultationId='66d1cc0f0900dc0e6d2be461' />
//         ) : ''
//       }
//     </div>
//   )
// }

// export default page

import { StatCard } from '@/components/pharmacy/PharmacyStatistics'
import React from 'react'

const page = () => {
  return (
    <div>
hi
      
    </div>
  )
}

export default page
