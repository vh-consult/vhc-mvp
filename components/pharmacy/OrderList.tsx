import React from 'react'
import { retrieveShopOrders } from '@/lib/actions/order.actions';
import Image from 'next/image'

interface OrderCardProps {
  imageUrl: string;
  buyerName: string;
  items: any[];
  hasPaid: boolean;
  deliverySatus: string
}

const OrderCard = (
  {buyerName, hasPaid, deliverySatus, items, imageUrl}: 
  OrderCardProps
) => {
    return (
      <div className='w-full h-[150px] cursor-pointer hover:shadow-lg flex items-center px-4 bg-white shadow-sm rounded-lg'>
        <div className='relative w-[90px]'>
          <Image 
            src={imageUrl} 
            alt=''
            width={100}
            height={100}
            className='w-full h-[100px] rounded-md'
          />
        </div>
        <div className="flex flex-col ml-2 w-[calc(100%-90px)] ">
          <h1 className="text-lg font-medium">Ordered by: {buyerName}</h1>
          <div className="flex flex-col my-1 ">
            <span className="text-sm font-medium leading-none">
              Items:
            </span>
            <p className="text-sm flex flex-wrap gap-x-2 ">
              {
                items.map((item, index)=> (
                  <span className="" key={index}>
                    {item.name}
                  </span>
                ))
              }
            </p>
          </div>
          <p className="flex">
            <div className='flex flex-center mr-6'>
              <span className={`w-3 h-3 ${hasPaid? 'bg-green-2': 'bg-red-500'} rounded-full`}></span>
              <span className="text-sm ml-1">{hasPaid? 'Paid': 'Pending'}</span>
            </div>
            <div className='flex flex-center'>
              <span className={`w-3 h-3 ${deliverySatus === "delivered"? 'bg-green-2': 'bg-red-500'} rounded-full`}></span>
              <span className="text-sm ml-1">
                {deliverySatus === "delivered"? 'Delivered': 'Not delivered'}
              </span>
            </div>
          </p>
        </div>
      </div>
    )
  }

const OrderList = async ({shopId}: {shopId: string}) => {
  const results = await retrieveShopOrders(shopId)
  return (
    <div className='grid grid-cols-2 gap-4'>
      {
        results.length > 0 ? results.map((order:any, index: number) => {
          <OrderCard 
            key={index}
            buyerName={order.buyer.firstName + ' ' + order.buyer.lastName}
            deliverySatus={order.status}
            hasPaid={order.payment_status === "Paid"? true : false }
            imageUrl={'/images/drug 1.jpg'}
            items={["para"]}
          />
        }): (
          <span className="text-sm ">
            No orders
          </span>
        )
      }
      hi
    </div>
  )
}

export default OrderList
