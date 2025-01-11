"use client"
import ConsultationSummaryCard from '@/components/consultation/ConsultationSummaryCard'
import RecordCard from '@/components/patient/RecordCard'
import RecordList from '@/components/patient/RecordList'
import { fetchHealthRecord } from '@/lib/actions/patient.actions'
import React, { useState } from 'react'
import Cookies from "js-cookie"


const HealthRecordPage =  () => {
  const user = JSON.parse(Cookies.get("user") || '{}');


  // const healthRecords = await fetchHealthRecord(user?.id as string)
  const [show, setShow] = useState(false)
  
  return(
    <>
      {/* {
        healthRecords && healthRecords.length > 0 ? (
          healthRecords.map((record:any, index:number) => (
            <RecordCard 
              key={index}
            />
          ))
        ): (
          <span></span>
        )
      } */}
          <div className='flex flex-center pt-[2%]'>

      {
        show === true? (
          <ConsultationSummaryCard consultationId='66d1cc0f0900dc0e6d2be461' />
        ) : (
<>
        <span className="" onClick={() => setShow(true)}>
              <RecordCard/>
              </span></>
                )
      }
    </div>
    </>
  )
}

export default HealthRecordPage
