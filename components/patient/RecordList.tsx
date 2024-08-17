import React from 'react'


interface HealthRecordProps {
    date: string;
    time: string;
    provider?: string;
    physician: string;
    // consultationinterface: string;
    complaint: Array<string>;
    diagnosis: Array<string>;
    medications: Array<{drug: string, dose: string}>;
    notes?: Array<string>;
    consultationType: string
  }

const RecordList = ({
    date,
    time,
    provider,
    physician,
    complaint,
    diagnosis,
    medications, 
    notes,
    consultationType
}: HealthRecordProps) => {
  return (
    <div className="w-full min-h-[125px] even:bg-white  flex justify-between border border-gray-400">
    <div className="w-1/12 flex flex-col  p-1 border-r border-r-gray-400">
        <span className="text-sm mb-4">
            {date}
        </span>
        <span className="text-xs">
            {time}
        </span>
    </div>
    <div className="w-2/12 flex flex-col  p-1 border-r border-r-gray-400">
        <span className="text-lg font-medium">
            {provider}
        </span>
        <span className="text-base font-normal my-1">
            {physician}
        </span>
        <span className="text-sm font-normal opacity-75">
            {consultationType}
        </span>
    </div>
    <div className="w-2/12 p-1 border-r border-r-gray-400">
        <ul className="list-disc pl-5">
            {
                complaint.map((issue,index)=> {
                    return(
                        <li key={index}>{issue}</li>
                    )
                })
            }
        </ul>
    </div>
    <div className="w-2/12 p-1 border-r border-r-gray-400">
        <ul className="list-disc pl-5">
            {
                diagnosis.map((diagnosis,index)=> {
                    return(
                        <li key={index}>{diagnosis}</li>
                    )
                })
            }
        </ul>
    </div>
    <div className="w-2/12 p-1 border-r border-r-gray-400">
        <ul className="list-disc pl-5">
            {
                medications.map((med,index)=> {
                    return(
                        <li key={index} className="capitalize">
                            {med.drug} - {med.dose}
                        </li>
                    )
                })
            }
        </ul>
    </div>
    <div className="w-3/12 p-1">
        <ul className="list-disc pl-5">
            {
                notes && 
                notes.map((note,index)=> {
                    return(
                        <li key={index}>{note}</li>
                    )
                })
            }
        </ul>
    </div>
</div>
  )
}

export default RecordList
