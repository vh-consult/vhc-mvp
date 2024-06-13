import Image from 'next/image'
import React from 'react'
import { BiTrash } from 'react-icons/bi'

const OrderList = () => {
  return (
    <div className='w-full py-2 flex flex-between'>
      <div className="flex items-center">
        <Image
          alt='drug image'
          src={'/images/drug 4.jpg'}
          width={50}
          height={50}
          className='w-[85px] h-[100px] mr-3 rounded-md object-cover'
        />
        <div className="">
          <h2 className="text-xl font-medium">Face Serum</h2>
          <p className="text-base">K-Pharma Limited</p>
          <p className="text-sm">12/06/2024 - 12:30pm</p>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl">Quantity</span>
        <span className="text-xl">2</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xl">Momo</span>
        <span className="text-xl">$27.50</span>
      </div>
      <span className='hover:cursor-pointer border-2 
      border-dark-3 hover:bg-dark-3 w-[45px] h-[45px] 
      flex flex-center rounded-full bg-dark-1'>
        <BiTrash/>
      </span>
    </div>
  )
}

export default OrderList
