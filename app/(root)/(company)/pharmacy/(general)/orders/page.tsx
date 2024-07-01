'use client'
import List from '@/components/general/List'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'

const OrdersPage = () => {
  const [isClicked, setIsClicked] = useState<boolean>()
  const filters = [
    {
      displayText: 'All',
      route: '/api/order',
    },
    {
      displayText: 'Pending',
      route: '/api/order',
    },
    {
      displayText: 'Delivered',
      route: '/api/order',
    },
    {
      displayText: 'Canceled',
      route: '/api/order',
    }
  ]
  const filterOrders = async (route: string) => {

  }
  useEffect(()=>{
    const fetchOrders = async () => {
  
    }
    fetchOrders()

  }, [])
  return (
    <main className='w-[80%] mx-auto min-h-screen pt-20 bg-dark-1'>
      <div className="flex px-11 flex-between">
        <h2 className="text-2xl font-semibold text-green-1">
          All Orders
        </h2>
        <div className= "">
          {
            filters.map(filter => (
              <Button 
              key={filter.route}
                onClick={()=>filterOrders(filter.route)}
                className={`${isClicked? 'bg-green-2 text-green-1': 'border-2 border-green-2'} hover:bg-green-2 hover:text-green-1 mx-1 rounded-full`}
              >
                {filter.displayText}
              </Button>
            ))
          }
        </div>
      </div>
      <div className="">

      </div>
    </main>
  )
}

export default OrdersPage
