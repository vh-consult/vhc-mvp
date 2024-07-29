"use client"
import { getDrug } from '@/lib/actions/inventory.actions'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { MdEdit } from 'react-icons/md'
import {
  Dialog, 
  DialogContent
} from "@/components/ui/dialog"

interface DrugProps {
  image: string;
  name: string;
  catalog: string;
  quantity: number;
  price: number;
  caution: string;
  expiryDate?: Date;
  createdAt: Date;
  updatedAt?: Date;
}

interface ItemDataProps {
  item: DrugProps|any;
  isOpen: boolean;
  onClose: () => void
}

const itemData = {
  image: '/images/drug 5.jpg',
  name: 'Collagen Mixture',
  catalog: 'Painkiller',
  quantity: 15,
  price: 34,
  caution: 'Not for children under 18, pregnant woman and lactating mothers',
  expiryDate: '12/05/2025',
  createdAt: '11/06/2024',
  updatedAt: '15/08/2024'
}



const ItemPreview =  (
  {
    item,
    isOpen, onClose,

  }: ItemDataProps
) => {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className='w-[650px] p-4 rounded-lg bg-white'>
            <div className="flex flex-between ">
              <div className="flex flex-center">
                <Image
                  src={item?.image}
                  alt=''
                  width={150}
                  height={150}
                  className='w-[100px] h-[100px] mr-4 object-cover rounded-lg'
                />
                <span className="flex flex-col">
                  <h2 className="text-2xl font-semibold">
                    {item?.name}
                  </h2>
                  <p className="">
                    Catalog: {item?.catalog}
                  </p>
                </span> 
              </div>
              <Button className='border-2 border-blue-4'>
                Edit
                <MdEdit className='ml-1'/>
              </Button>
            </div>
            <div className="flex flex-col flex-between gap-3 pt-4 ">
              <span className="w-full grid grid-cols-2">
                <span className="font-medium">
                  Quantity: 
                </span>
                <span className="">
                  {item?.quantity}
                </span>
              </span>
              <span className="w-full grid grid-cols-2">
                <span className="font-medium">
                  Price ($): 
                </span>
                <span className="">
                {item?.price}
                </span>
              </span>
              <span className="w-full grid grid-cols-2">
                <span className="font-medium">
                  Caution: 
                </span>
                <span className="">
                {item?.caution}
                </span>
              </span>
              <span className="w-full grid grid-cols-2">
                <span className="font-medium">
                  Expiry Date: 
                </span>
                <span className="">
                  {new Date(item?.expiryDate!).toLocaleDateString()}
                </span>
              </span>
              <span className="w-full grid grid-cols-2">
                <span className="font-medium">
                  Uploaded On: 
                </span>
                <span className="">
                  {new Date(item?.createdAt!).toLocaleDateString()}
                </span>
              </span>
              <span className="w-full grid grid-cols-2">
                <span className="font-medium">
                  Last Updated: 
                </span>
                <span className="">
                  {new Date(item?.updatedAt!).toLocaleDateString()}
                </span>
              </span>
            </div>
        </DialogContent>
      </Dialog>
  )
}

export default ItemPreview
