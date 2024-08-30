"use client"
import React, {useEffect, useState} from 'react'
import HealthRecordPage from '@/app/(root)/(patient)/[clerkId]/health-record/page'
import { fetchHealthRecord } from '@/lib/actions/patient.actions'
import RecordList, { HealthRecordProps } from '../patient/RecordList'
import SearchBar from '../general/SearchBar'


const HealthRecordPreview = ({patientId}: {patientId: string}) => {
  const [records, setRecords] = useState<HealthRecordProps[]>([])
  useEffect(()=> {
    const fetch = async () => {
      const healthRecords = await fetchHealthRecord(patientId)
      setRecords(healthRecords)
    }
    fetch()
  }, [patientId])
  return (
    <main className='shadow-md bg-green-1 w-4/5 mx-auto'>
      <div className="w-full text-sm py-3 sticky left-0 top-0 z-30 text-center text-green-4 font-medium bg-white">
        <div className="flex flex-between px-6 pb-3">
          <h1 className="text-2xl font-bold">Patient Health Record</h1>
          <SearchBar className='rounded-full bg-gray-100'/>
        </div>
        <div className='flex justify-between items-center'>
          <span className="w-1/12 ">Date</span>
          <span className="w-2/12 ">Host Details</span>
          <span className="w-2/12 ">Symptoms</span>
          <span className="w-2/12 ">Diagnosis</span>
          <span className="w-2/12 ">Medication</span>
          <span className="w-3/12 ">Notes</span>
        </div>
      </div>
      <div className='w-full bg-inherit'>
        {
          records.map((record, index) => {
            return (
              <RecordList
                key={index}
                complaint={record.complaint}
                consultationType={record.consultationType}
                date={record.date}
                diagnosis={record.diagnosis}
                medications={record.medications}
                physician={record.physician}
                time={record.time}
                notes={record.notes}
                provider={record.provider}
              />
            )
          })
        }
      </div>
    </main>
  )
}

export default HealthRecordPreview
