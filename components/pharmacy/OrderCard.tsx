import React from 'react'
import { retrieveShopOrders } from '@/lib/actions/order.actions';
import Image from 'next/image'

interface OrderCardProps {
  imageUrl: string;
  buyerName?: string;
  shopName?: string;
  items: any[];
  hasPaid?: boolean;
  deliveryStatus?: string;
  location?: string;
  description?: string;
}

const OrderCard = (
  {buyerName, hasPaid, deliveryStatus, shopName, items, imageUrl, location, description}: 
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
            className='w-full h-[100px] rounded-md object-cover'
          />
        </div>
        <div className="flex flex-col ml-2 w-[calc(100%-90px)] ">
          {
            buyerName && <h1 className="text-lg font-medium">Ordered by: {buyerName}</h1>
          }
          {
            shopName && (
              <div className="">
                <h1 className="text-lg font-medium leading-tight">Ordered at: {shopName}</h1>
                <p className="">{location && <p className='text-base'>Location: {location}</p>}</p>
              </div>
            )
          }
          <div className="flex flex-row mb-1 items-center ">
            <span className="text-sm mr-1 font-medium leading-none">
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
          {
            description && <p className='text-sm'>{description}</p>
          }
          <p className="flex">
            {
              hasPaid && (
              <div className='flex flex-center mr-6'>
                <span className={`w-3 h-3 ${hasPaid? 'bg-accent': 'bg-red-500'} rounded-full`}></span>
                <span className="text-sm ml-1">{hasPaid? 'Paid': 'Pending'}</span>
              </div>
              )
            }
            {
              deliveryStatus && (
                <div className='flex flex-center'>
                  <span className={`w-3 h-3 ${deliveryStatus === "delivered"? 'bg-accent': 'bg-red-500'} rounded-full`}></span>
                  <span className="text-sm ml-1">
                    {deliveryStatus === "delivered"? 'Delivered': 'Not delivered'}
                  </span>
                </div>
              )
            }
          </p>
        </div>
      </div>
    )
  }

export default OrderCard