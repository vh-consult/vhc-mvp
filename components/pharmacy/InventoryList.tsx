import { getPharmacyInventory } from '@/lib/actions/inventory.actions';
import Image from 'next/image'
import React from 'react'
import InventoryCard from './InventoryCard';

const Header = () => {
    return(
        <div className="w-full h-10 grid grid-cols-6 px-6 items-center text-sm font-semibold bg-blue-2">
            <span>
                No.
            </span>
            <span>
                Medicine
            </span>
            <span>
                Catalog
            </span>
            <span>
                Quantity
            </span>
            <span>
                Price
            </span>
            <span>
                Expiry Date
            </span>
        </div>
    )
}


const InventoryList =  async ({pharmacyId}: {pharmacyId: string}) => {
    const drugs = await getPharmacyInventory(pharmacyId)
  return (
    <div className='w-full'>
      <Header/>
      <div className='w-full'>
        {
            drugs?.map((drug:any, index:number) => (
                <InventoryCard
                    key={index}
                    catalog={drug?.catalog}
                    count={1}
                    expiryDate={new Date(2025, 5, 12)}
                    imageUrl={drug?.image as string}
                    name={drug?.name}
                    price={drug?.price}
                    quantity={drug.quantity}
                />
            ))
        }
        {
            drugs?.length === 0 ? 'No drugs in inventory': ''
        }
      </div>
      
    </div>
  )
}

export default InventoryList
