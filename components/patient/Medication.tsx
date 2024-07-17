import React from 'react'
import MedList from './MedCardAndList';

const Medication = () => {
  return (
      <div className="w-[60%]  h-[400px] rounded-lg bg-dark-1">
        <div className="w-full p-3 flex flex-row flex-between">
          <h3 className="text-sm opacity-75 font-semibold ">
            Current Medication
          </h3>
          <span className="hover:text-blue-1 cursor-pointer underline">
            see all
          </span>
        </div>
        <div className="w-full">
          <MedList/>
        </div>
      </div>
  )
}

export default Medication
