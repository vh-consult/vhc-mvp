"use client"
import React, {useState, useEffect} from 'react'
import DrugCard from './DrugCard'
import { getPharmacyInventory } from '@/lib/actions/company.actions'

const DrugListings = ({pharmacyId, query}: {pharmacyId: string, query?: string}) => {
  const [drugs, setDrugs] = useState<any[]>()
  const [filteredDrugs, setFilteredDrugs] = useState<any[]>()
  useEffect(() => {
    const fetchDrugs = async () => {
      const allDrugs = await getPharmacyInventory(pharmacyId)
      setDrugs(allDrugs)
      // const filteredDrugs = await fetchFilteredDrugs(pharmacyId, query!)
      // setFilteredDrugs(filteredDrugs)
    }
    fetchDrugs()
  }, [pharmacyId, query])
  return (
    <div className='w-[90%] mx-auto py-8 grid grid-cols-6 '>

      {
      //   query? (filteredDrugs && filteredDrugs.map((drug: {
      //     image: string, name: string , quantity: number, price: number
      //     }, index: React.Key | null | undefined) => {
      //     return(
      //         <DrugCard
      //             name={drug.name}
      //             key={index}
      //             quantity={drug.quantity}
      //             imageSRC={drug.image}
      //             price={drug.price}
      //       />
      //     )
      // } 

      //   )) :
        (drugs && drugs.map((drug: {
            image: string, name: string , quantity: number, price: number
            }, index: React.Key | null | undefined) => {
            return(
                <DrugCard
                    name={drug.name}
                    key={index}
                    quantity={drug.quantity}
                    imageSRC={drug.image}
                    price={drug.price}
              />
            ) 
        }))
      }
    </div>
  )
}

export default DrugListings
