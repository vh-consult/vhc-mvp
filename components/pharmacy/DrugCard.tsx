import Image from 'next/image';
import React from 'react'

interface DrugCardProps {
  name: string;
  imageSRC: string;
  price: number;
  quantity: number;
}

const DrugCard = ({
  name, 
  imageSRC, 
  price,
  quantity
}: DrugCardProps) => {
  return (
    <div className='w-[165px] h-[185px] rounded-lg border 
    border-gray-200 hover:shadow-md'>
      <Image 
        src={imageSRC} 
        alt="" 
        width={100} 
        height={100} 
        className="w-full object-cover h-[70%] border-b 
        border-gray-200 rounded-t-lg"
      />
      <div className="p-1">
        <span className="font-medium">{name}</span>
        <div className="flex text-sm items-center 
        justify-between">
          <span> <b>{quantity}</b> in stock</span>
          <span>$<b>{price}</b>.00</span>
        </div>
      </div>
  </div>
  )
}

export default DrugCard
