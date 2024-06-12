import Image from 'next/image'
import React from 'react'
import { BiTrash } from 'react-icons/bi'

const CartItem = () => {
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
          <p className="text-base">Beauty & Cosmetics</p>
          <p className="text-sm">For treating pimpls and acnes</p>
        </div>
      </div>
      <span className="text-xl">2</span>
      <span className="text-xl">$27.50</span>
      <span className='hover:cursor-pointer border-2 border-dark-3 hover:bg-dark-3 w-[45px] h-[45px] flex flex-center rounded-full bg-dark-1'>
        <BiTrash/>
      </span>
    </div>
  )
}

export default CartItem
