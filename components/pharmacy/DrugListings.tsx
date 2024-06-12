import { Pharmacy } from '@/lib/database/models/company.model'
import React from 'react'
import DrugCard from './DrugCard'

const DrugListings = async (pharmacyId: string) => {
  const drugs = await Pharmacy.findById(pharmacyId).populate("inventory")
  return (
    <div className='w-[80%] flex flex-wrap'>
      {
        drugs.map((drug: {
            image: string, name: string , numberInStock: number, price: number
            }, index: React.Key | null | undefined) => {
            return(
                <DrugCard
                    name={drug.name}
                    key={index}
                    numberInStock={3}
                    imageSRC={drug.image}
                    price={3}
              />
            )
        })
      }
    </div>
  )
}

export default DrugListings
