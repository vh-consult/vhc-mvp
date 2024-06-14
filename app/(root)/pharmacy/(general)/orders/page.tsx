import OrderList from '@/components/pharmacy/OrderList'
import { Button } from '@/components/ui/button'
import React from 'react'

const OrdersPage = () => {
  return (
    <main className='w-[80%] mx-auto min-h-screen pt-20 bg-dark-1'>
      <div className="flex flex-between">
        <h2 className="text-2xl font-semibold text-sky-1">
          All Orders
        </h2>
        <div className= "">
          <Button>
            All
          </Button>
          <Button>
            In transit
          </Button>
          <Button>
            Delivered
          </Button>
        </div>
      </div>
      <div className="">
        <OrderList/>
        <OrderList/>
        <OrderList/>
        <OrderList/>
        <OrderList/>

      </div>
    </main>
  )
}

export default OrdersPage
