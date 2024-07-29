"use client"
import { getPharmacyInventory } from '@/lib/actions/inventory.actions';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import InventoryCard from './InventoryCard';
import ItemPreview from './ItemPreview';

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


const InventoryList =  ({pharmacyId}: {pharmacyId: string}) => {
    const [drugs, setDrugs] =useState([])
    const [currentDrug, setCurrentDrug] =useState([])
    const [showPopUp, setshowPopUp] =useState<boolean>(false)

    useEffect(()=> {
        const getDrugs = async () => {
            const drugs = await getPharmacyInventory(pharmacyId)
            setDrugs(drugs)
        }
        getDrugs()
    }, [pharmacyId])
  return (
    <div className='w-full'>
      <Header/>
      <div className='w-full'>
        {
            drugs?.map((drug:any, index:number) => (
                <div onClick={()=>{
                    setCurrentDrug(drug)
                    setshowPopUp(true)
                    }} key={index}>
                    <InventoryCard
                        catalog={drug?.catalog}
                        count={1}
                        expiryDate={new Date(2025, 5, 12)}
                        imageUrl={drug?.image as string}
                        name={drug?.name}
                        price={drug?.price}
                        quantity={drug.quantity}
                    />
                </div>
            ))
        }
        {
            showPopUp === true? (
                <ItemPreview
                    item={currentDrug}
                    onClose={()=>setshowPopUp(false)}
                    isOpen={showPopUp}
                />
            ) : ''
        }
        {
            drugs?.length === 0 ? 'No drugs in inventory': ''
        }
      </div>
      
    </div>
  )
}

export default InventoryList
