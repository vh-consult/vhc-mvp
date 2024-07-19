"use client"
import React, {useState, useEffect} from 'react'
import DrugCard from './DrugCard'
import { fetchFilteredDrugs, getPharmacyInventory } from '@/lib/actions/company.actions'

const DrugListings = async ({pharmacyId, query}: {pharmacyId: string, query?: string}) => {
  const drugs = await getPharmacyInventory(pharmacyId)
  
  const filteredDrugs = await fetchFilteredDrugs(pharmacyId, query!)
  return (
    <div className='w-[80%] flex flex-wrap'>

      {
        query? (filteredDrugs.map((drug: {
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
      } 

        )) :
        (drugs.map((drug: {
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
        }))
      }
    </div>
  )
}

export default DrugListings
