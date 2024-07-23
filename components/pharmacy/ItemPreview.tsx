import { getDrug } from '@/lib/actions/inventory.actions'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { MdEdit } from 'react-icons/md'

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

const ItemPreview = async ({itemId, companyId}: {itemId: string, companyId: string}) => {
    // const itemData = await getDrug(itemId, companyId)
    return (
    <section className='w-[650px] p-4 rounded-lg  bg-dark-1'>
      <div className="flex flex-between ">
        <div className="flex flex-center">
          <Image
            src={itemData.image}
            alt=''
            width={150}
            height={150}
            className='w-[100px] h-[100px] mr-4 object-cover rounded-lg'
          />
          <span className="flex flex-col">
            <h2 className="text-2xl font-semibold">
              {itemData.name}
            </h2>
            <p className="">
              Catalog: {itemData.catalog}
            </p>
          </span> 
        </div>
        <Button className='border-2 '>
          Edit
          <MdEdit/>
        </Button>
      </div>
      <div className="flex flex-col flex-between gap-3 pt-4 ">
        <span className="w-full grid grid-cols-2">
          <span className="font-medium">
            Quantity: 
          </span>
          <span className="">
            {itemData.quantity}
          </span>
        </span>
        <span className="w-full grid grid-cols-2">
          <span className="font-medium">
            Price ($): 
          </span>
          <span className="">
           {itemData.price}
          </span>
        </span>
        <span className="w-full grid grid-cols-2">
          <span className="font-medium">
            Caution: 
          </span>
          <span className="">
           {itemData.caution}
          </span>
        </span>
        <span className="w-full grid grid-cols-2">
          <span className="font-medium">
            Expiry Date: 
          </span>
          <span className="">
            {itemData.expiryDate}
          </span>
        </span>
        <span className="w-full grid grid-cols-2">
          <span className="font-medium">
            Uploaded On: 
          </span>
          <span className="">
            {itemData.createdAt}
          </span>
        </span>
        <span className="w-full grid grid-cols-2">
          <span className="font-medium">
            Last Updated: 
          </span>
          <span className="">
            {itemData.updatedAt}
          </span>
        </span>
      </div>
    </section>
  )
}

export default ItemPreview
