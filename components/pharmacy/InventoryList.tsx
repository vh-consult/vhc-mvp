"use client"
import { getPharmacyInventory } from '@/lib/actions/company.actions';
import { DrugParams } from '@/lib/database/models/drug.model';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Header = () => {
    return(
        <div className="w-full h-10 grid grid-cols-6 px-6 items-center text-sm font-semibold bg-dark-4">
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
        <div className="w-full h-10 grid grid-cols-6 px-6 items-center bg-dark-1">
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
                {expiryDate.toLocaleDateString()}
            </span>
        </div>
    )
}

const InventoryList = ({pharmacyId}: {pharmacyId: string}) => {
    const [inventory, setInventory] = useState<DrugParams[]>([])
    useEffect( () => {
        const fetch = async () => {
            const drugs = await getPharmacyInventory(pharmacyId)
            console.log(drugs)
            setInventory(drugs)
        }
        fetch()
    }, [inventory, pharmacyId]) 
    // const drugs = await getPharmacyInventory(pharmacyId)
  return (
    <div className='w-full'>
      <Header/>
      <>
        {
            inventory?.length >= 1 ? (inventory?.map((drug:DrugParams, index:number) => {
                <InventoryCard
                    key={index}
                    catalog={drug.catalog}
                    count={1}
                    expiryDate={new Date(2025, 5, 12)}
                    imageUrl={drug.image as string}
                    name={drug.name}
                    price={drug.price}
                    quantity={drug.quantity}
                />
            })): 'No item in inventory'
        }
      </>
      
    </div>
  )
}

export default InventoryList
