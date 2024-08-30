import RecordCard from '@/components/patient/RecordCard'
import RecordList from '@/components/patient/RecordList'
import { fetchHealthRecord } from '@/lib/actions/patient.actions'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'



const HealthRecordPage = async () => {
  const user = await currentUser()
  const healthRecords = await fetchHealthRecord(user?.id as string)
  
  return(
    <>
      {
        healthRecords && healthRecords.length > 0 ? (
          healthRecords.map((record:any, index:number) => (
            <RecordCard 
              key={index}
            />
          ))
        ): (
          <span></span>
        )
      }
    </>
  )
}

export default HealthRecordPage
