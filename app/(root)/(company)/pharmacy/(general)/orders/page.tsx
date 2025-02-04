'use client'
import { Button } from '@/components/ui/button'
import { fetchUserOrders } from '@/lib/actions/order.actions'
import React, { useEffect, useState } from 'react'
import OrderCard from '@/components/pharmacy/OrderCard'
import Loader from '@/components/general/Loader'
import { useUserStore } from '@/stores/user-store'
const OrdersPage = () => {
  const {user} = useUserStore()
  const [active, setActive] = useState<string>('all')
  const [allOrders, setAllOrders] = useState([])
  const [displayOrders, setDisplayOrders] = useState(allOrders)
  const filters = ['All',  'Pending',  'Delivered', 'Canceled'  ]

  const filterOrders = async (filter: string) => {
    switch (filter) {
      case "all":
        setDisplayOrders(allOrders)
        setActive("all")
        break;
      case "pending":
        allOrders.forEach((order:any) => {
          const pendingOrders:any = []
          if(order.status === "pending") {
            pendingOrders.push(order)
          }
          setDisplayOrders(pendingOrders) 
        })
        setActive("pending")

        break;
      case "delivered":
        allOrders.forEach((order:any) => {
          const deliveredOrders:any = []
          if(order.status === "delivered") {
            deliveredOrders.push(order)
          }
          setDisplayOrders(deliveredOrders) 
        })
        setActive("delivered")
        break;
      case "canceled":
        allOrders.forEach((order:any) => {
          const canceledOrders:any = []
          if(order.status === "canceled") {
            canceledOrders.push(order)
          }
          setDisplayOrders(canceledOrders)
        })
        setActive("canceled")
        break;
      default:
        break;
    }
  }
  useEffect(()=>{
    const fetchOrders = async () => {
      const orders = await fetchUserOrders(user?._id as string)
      console.log(orders)
      setAllOrders(orders)
    }
    fetchOrders()

  }, [user?._id])
  return (
    <main className='w-[90%] mx-auto min-h-screen py-4 bg-white'>
      <div className="flex px-11 flex-between sticky top-[60px]">
        <h2 className="text-2xl font-semibold text-dark">
          All Orders
        </h2>
        <div className= "">
          {
            filters.map((filter:string, index:number) => (
              <Button 
                key={index}
                onClick={()=>{
                  filterOrders(filter.toLowerCase())
                  
                }}
                className={`${active === filter.toLowerCase()? 'bg-accent text-secondary': 'border-2 '} hover:bg-accent hover:text-secondary mx-1 rounded-full`}
              >
                {filter}
              </Button>
            ))
          }
        </div>
      </div>
      <div className="grid grid-cols-2">
        {
          displayOrders.length > 0 ? (displayOrders.map((order:any, index:number) => (
            <OrderCard 
              key={index}
              buyerName={order.buyerName}
              imageUrl={order.shop.logo}
              shopName={order.shop.name}
              items={order.items}
              location={order.shop.location}
              description={order.note}
            />
          ))): <Loader/>
        }
      </div>
    </main>
  )
}

export default OrdersPage
