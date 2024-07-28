import { getPharmacyInventory } from '@/lib/actions/inventory.actions';
import Image from 'next/image'
import React from 'react'

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
    return(
        <div className="w-full h-10 grid cursor-pointer hover: bg-gray-100  grid-cols-6 px-6 items-center bg-white">
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
            <span className='pl-4'>
                {new Date(expiryDate).toLocaleDateString()}
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
