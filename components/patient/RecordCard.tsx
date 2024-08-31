import React from 'react'
import { MdVideoCall } from 'react-icons/md'
import { PiVirtualReality } from 'react-icons/pi'

const RecordCard = () => {
  return (
    <div className='w-[175px] h-[150px] flex flex-col flex-center bg-gray-50 rounded-lg hover:shadow-sm border cursor-pointer'>
        <span className="w-[45px] h-[45px] text-[32px] border rounded-full bg-green-3 flex flex-center ">
            <MdVideoCall/>
        </span>
      <h1 className="text-lg font-medium">Dr Solomon Ayisi</h1>
      <h3 className="text-base leading-tight">{new Date(2023, 3, 14, 11, 30).toLocaleDateString()}</h3>
      <p className="text-sm">{new Date(2023, 3, 14, 11, 30).toLocaleTimeString()}</p>
    </div>
  )
}

export default RecordCard
