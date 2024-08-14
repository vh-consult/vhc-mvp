"use client"
import React, {useState} from 'react'
import Image from 'next/image';

interface InventoryItemProps {
    count: number;
    imageUrl: string;
    name: string;
    catalog: string;
    quantity: number;
    price: number;
    expiryDate: Date;
}
 
const InventoryCard = (
    {imageUrl, count, name, catalog, quantity, price, expiryDate}
    : InventoryItemProps
) => {
    const [open, setOpen] = useState<boolean>(false)
    return(
        <div onClick={()=> setOpen(true)} className="w-full h-10 grid cursor-pointer hover:bg-gray-100  grid-cols-6 px-6 items-center bg-white">
            <div className="flex items-center">
                <span>
                    {count}
                </span>
                <Image
                    alt=''
                    src={imageUrl}
                    width={30}
                    height={30}
                    className='w-[30px] h-[30px] object-cover rounded-full ml-8'
                />
            </div>
            <span>
                {name}
            </span>
            <span>
                {catalog}
            </span>
            <span className='pl-4'>
                {quantity}
            </span>
            <span className=''>
                {price}
            </span>
            <span className='pl-0'>
                {new Date(expiryDate).toLocaleDateString()}
            </span>
        </div>
    )
}


export default InventoryCard
