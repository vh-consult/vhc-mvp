import React from 'react'

const DrugPrescribed = ({drugs}: {drugs: any[]}) => {
  return (
    <div className="my-4 bg-gray-100 p-2">
    <h1 className="text-sm">Drugs Prescribed</h1>
    <div className="flex flex-between text-xs font-light opacity-80">
      {
        drugs?.length === 0 ? '' : (
          <div className='flex flex-between gap-x-10'>
            <span className="">Drug</span>
            <span className="">Caution</span>
            <span className="">Duration</span>
            <span className="">Dose</span>
          </div>
        )
      } 
    </div>
    <div className="flex flex-col gap-2 text-sm">
      {
        drugs?.length === 0 ? 'No drugs added yet': drugs?.map((drug, index) => (
          <div key={index} className='grid grid-cols-4 gap-x-8 bg-secondary text-sm'>
            <span className="">{drug.drug}</span>
            <span className="">{drug.caution}</span>
            <span className="">{drug.duration}</span>
            <span className="">{drug.dose}</span>
          </div>
        ))
      }
    </div>
  </div>
  )
}

export default DrugPrescribed
