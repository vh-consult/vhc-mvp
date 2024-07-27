import React from 'react'

const CompanyHiglightCard = () => {
  return (
    <div className='w-[250px] h-[125px] p-3 flex flex-col justify-center rounded-lg shadow-sm cursor-pointer bg-white'>
      <h1 className="text-base">
        Category
      </h1>
      <span className="w-6 h-6 bg-green-2 rounded-full"></span>
      <div className="flex flex-between">
        <div className="">
          <h1 className="text-xl font-semibold ">
            6
          </h1>
          <p className="text-xs leading-none">Updated </p>
        </div>
        <div className="">
          <h1 className="text-xl text-end font-semibold ">
            6
          </h1>
          <p className="text-xs leading-none">Updated </p>
        </div>
      </div>
    </div>
  )
}

export default CompanyHiglightCard
