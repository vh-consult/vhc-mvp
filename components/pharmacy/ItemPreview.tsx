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
    <section className='w-[650px] p-4 rounded-lg bg-dark-1'>
      <div className="flex flex-between">
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
      <div className="flex flex-col gap-3 even:bg-dark-4 pt-4">
        <span className="">
          Quantity: {itemData.quantity}
        </span>
        <span className="">
          Price ($): {itemData.price}
        </span>
        <span className="">
          Caution: {itemData.caution}
        </span>
        <span className="">
          Expiry Date: {itemData.expiryDate}
        </span>
        <span className="">
          Uploaded On: {itemData.createdAt}
        </span>
        <span className="">
          Last Updated: {itemData.updatedAt}
        </span>
      </div>
    </section>
  )
}

export default ItemPreview
