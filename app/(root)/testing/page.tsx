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

import { fetchHealthRecord } from '@/lib/actions/patient.actions'
import React from 'react'

// 66d506b6ef110dc052bccebf | user_2lUZugFfUnUo3QExbro79HEpmjd - PATIENT
// 66d5158904ba2fefbc5855f7 | user_2lUhdFBzenZC55C5X3GOG5YzbE3 - PharmacyAdmin
// 66d5aeb9dd0aa3231b4f2ae4 | user_2lVzB5FW57hTuql9Etg0OM1lXVW - DOCTOR

const page = async () => {
  const fetch = await fetchHealthRecord('user_2lUZugFfUnUo3QExbro79HEpmjd')
  console.log(fetch)
  return (
    <div>

    </div>
  )
}
export default page
