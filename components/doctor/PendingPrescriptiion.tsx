"use client"
import React, {useState} from 'react'
import { AiOutlineFolderView } from 'react-icons/ai'
import { BiPlus } from 'react-icons/bi'
import { Button } from '../ui/button'

interface PendingPrescriptionCardProps {
    scheduledAt: Date;
    clientName: string;
    bookingType: string; 
}

const PendingPrescriptiion = ({
    scheduledAt, 
    bookingType, clientName
}:PendingPrescriptionCardProps) => {
    const [showSummary, setShowSummary] = useState<boolean>(false)
    const [showPrescription, setShowPrescription] = useState<boolean>(false)
  return (
    <div className='w-[300px] h-[100px] flex p-2 hover:bg-gray-100'>
      <span className='rounded-lg bg-cyan-100 mr-4 font-bold text-2xl w-10 h-10 flex flex-center '>
        {clientName.slice(0,1)}
      </span>
      <div className="">
        <div className="">
          <h1 className="text-lg leading-tight capitalize">Patient: {clientName}</h1>
          <p className="text-sm">Date: {new Date(scheduledAt).toLocaleString()}</p>
          <p className="text-sm">Channel: {bookingType}</p>
        </div>
        <div className="flex mt-2 text-sm">
          <Button onClick={()=>setShowSummary(true)} className="w-[100px] h-8 mr-2 rounded-md text-white flex flex-center bg-red-400 hover:bg-red-600">
              <AiOutlineFolderView className='mr-1'/> View Summary
          </Button>
          <Button onClick={()=>setShowPrescription(true)} className="w-[120px] h-8 rounded-md flex text-white flex-center bg-green-400 hover:bg-green-600">
              <BiPlus className='mr-1'/> Add Prescription
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PendingPrescriptiion
