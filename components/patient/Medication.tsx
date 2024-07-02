import React from 'react'
import MedList from './MedCardAndList';

const Medication = () => {
  return (
      <div className="w-[60%]  h-[400px] rounded-lg bg-dark-1">
        <h3 className="text-sm opacity-75 font-semibold p-3">
          Current Medication
        </h3>
        <div className="w-full">
          <MedList/>
        </div>
      </div>
  )
}

export default Medication
