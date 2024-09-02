import React from 'react'
import ExpiringDrugsList from '../pharmacy/ExpiringDrugsList'
import OutOfStockList from '../pharmacy/OutOfStockList'
import PharmacyStatistics from '../pharmacy/PharmacyStatistics'
import RecentOrders from '../pharmacy/RecentOrders'
import { fetchPharmacyOverviewData } from '@/lib/actions/company.actions'

const orders = [
  {
    name: 'Samuella Otoo',
    createdAt: new Date(2024, 7, 30),
    paymentStatus: "Paid",
    drugs: [
      {
        image: '/images/drug 0.jpg'
      }
    ]
  },
  {
    name: 'James Oppong',
    createdAt: new Date(2024, 7, 30),
    paymentStatus: "Paid",
    drugs: [
      {
        image: '/images/drug 1.jpg'
      }
    ]
  }
]

const expiring = [
  {
    name: 'Anadin',
    expiryDate: new Date(2024, 7, 20),
    quantity: 23,
    image: '/images/drug 0.jpg'
  },
  {
    name: 'Paracetamol',
    expiryDate: new Date(2024, 7, 15),
    quantity: 13,
    image: '/images/drug 1.jpg'
  },

]

const outOfStock = [
  {
    name: 'Anadin',
    finishedDate: new Date(2024, 7, 23),
    image: '/images/drug 8.jpg'
  },
  {
    name: 'Paracetamol',
    finishedDate: new Date(2024, 7, 26),
    image: '/images/drug 6.jpg'
  },
]

const stats = [
  {
    figure: 120,
    title: 'Sales',
    scaleOfReference: '$',
    subtext: 'This month'
  },
  {
    figure: 79,
    title: 'Conversion Rate',
    scaleOfReference: '%',
    subtext: 'As at last week'
  },
]


const PharmacyOverview = async ({id}: {id: string}) => {
  // const overviewData = await fetchPharmacyOverviewData(id)
  // console.log(overviewData)
  return (
    <main className='w-full h-[540px] flex flex-between'>
      <div className="h-full w-[40%] bg-white">
        <h3 className="text-sm opacity-75 font-semibold p-3">
          Recent Orders
        </h3>
        <RecentOrders orders={orders}/>
      </div>

      <div className="w-[35%] h-full flex flex-col flex-between">
        <div className="w-full h-[48%] bg-white rounded-lg ">
            <h3 className="text-sm opacity-75 font-semibold p-3">
                Expiring Drugs
            </h3>
            <div className="w-full">
                <ExpiringDrugsList drugs={expiring}/>
            </div>
        </div>
        <div className="w-full h-[48%] bg-white rounded-lg">
            <h3 className="text-sm opacity-75 font-semibold p-3">
                Out of Stock
            </h3>
            <div className="w-full">
              <OutOfStockList finishedDrugs={outOfStock}/>
            </div>
        </div>
      </div>
      <div className="h-full w-[22%] bg-white">
        <h3 className="text-sm opacity-75 font-semibold p-3">
          Statistics
        </h3>
        <PharmacyStatistics statData={stats}/>
      </div>
    </main>
  )
}

export default PharmacyOverview
