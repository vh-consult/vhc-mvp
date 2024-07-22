import { getDrug } from '@/lib/actions/inventory.actions'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { MdEdit } from 'react-icons/md'

const ItemPreview = async ({itemId, companyId}: {itemId: string, companyId: string}) => {
    const itemData = await getDrug(itemId, companyId)
    return (
    <section className='w-[650px] bg-dark-1'>
      <div className="flex flex-between">
        <div className="">
          <Image
            src={itemData.image}
            alt=''
            width={150}
            height={150}
            className='w-[125px] h-[100px] object-cover rounded-lg'
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
      <div className="flex flex-col gap-4 even:bg-dark-3">
        <span className="">
          Quantity: {itemData.quantity}
        </span>
        <span className="">
          Price: {itemData.price}
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
