import React from 'react'
import ExpiringDrugsList from '../pharmacy/ExpiringDrugsList'
import OutOfStockList from '../pharmacy/OutOfStockList'
import PharmacyStatistics from '../pharmacy/PharmacyStatistics'
import RecentOrders from '../pharmacy/RecentOrders'
import { fetchPharmacyOverviewData } from '@/lib/actions/company.actions'

const PharmacyOverview = async ({id}: {id: string}) => {
  const overviewData = await fetchPharmacyOverviewData(id)
  return (
    <main className='w-full h-[540px] flex flex-between'>
      <div className="h-full w-[40%] bg-white">
        <h3 className="text-sm opacity-75 font-semibold p-3">
          Recent Orders
        </h3>
        <RecentOrders orders={[]}/>
      </div>

      <div className="w-[35%] h-full flex flex-col flex-between">
        <div className="w-full h-[48%] bg-white rounded-lg ">
            <h3 className="text-sm opacity-75 font-semibold p-3">
                Expiring Drugs
            </h3>
            <div className="w-full">
                <ExpiringDrugsList drugs={[]}/>
            </div>
        </div>
        <div className="w-full h-[48%] bg-white rounded-lg">
            <h3 className="text-sm opacity-75 font-semibold p-3">
                Out of Stock
            </h3>
            <div className="w-full">
              <OutOfStockList finishedDrugs={[]}/>
            </div>
        </div>
      </div>
      <div className="h-full w-[22%] bg-white">
        <h3 className="text-sm opacity-75 font-semibold p-3">
          Statistics
        </h3>
        <PharmacyStatistics statData={[]}/>
      </div>
    </main>
  )
}

export default PharmacyOverview
