import React from 'react'

const HospitalOverview = () => {
  return (
    <main className='w-full h-[540px] flex flex-between'>
      <div className="h-full w-[40%] bg-dark-1">
        <h3 className="text-sm opacity-75 font-semibold p-3">
          Recent Appointments
        </h3>
      </div>

      <div className="w-[35%] h-full flex flex-col flex-between">
        <div className="w-full h-[48%] bg-dark-1 rounded-lg ">
            <h3 className="text-sm opacity-75 font-semibold p-3">
                Affiliate Doctors
            </h3>
            <div className="w-full">
                
            </div>
        </div>
        <div className="w-full h-[48%] bg-dark-1 rounded-lg">
            <h3 className="text-sm opacity-75 font-semibold p-3">
                Clientele
            </h3>
            <div className="w-full">
                
            </div>
        </div>
      </div>
      <div className="h-full w-[22%] bg-dark-1">
        <h3 className="text-sm opacity-75 font-semibold p-3">
          Statistics
        </h3>
      </div>
    </main>
  )
}

export default HospitalOverview
