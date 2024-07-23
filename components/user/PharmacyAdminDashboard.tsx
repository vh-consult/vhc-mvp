import React from 'react'
import AlertList from '../doctor/AlertList'
import ClientList from '../doctor/ClientList'

const PharmacyAdminDashboard = () => {
  return (
    <main className='w-full h-[540px] flex flex-between'>
      <div className="h-full w-[40%] bg-dark-1">
        <h3 className="text-sm opacity-75 font-semibold p-3">
          Recent Orders
        </h3>
      </div>

      <div className="w-[35%] h-full flex flex-col flex-between">
        <div className="w-full h-[48%] bg-dark-1 rounded-lg ">
            <h3 className="text-sm opacity-75 font-semibold p-3">
                Expiring Drugs
            </h3>
            <div className="w-full">
                <AlertList/>
            </div>
        </div>
        <div className="w-full h-[48%] bg-dark-1 rounded-lg">
            <h3 className="text-sm opacity-75 font-semibold p-3">
                Out of Stock
            </h3>
            <div className="w-full">
              No drugs yet.
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

export default PharmacyAdminDashboard
