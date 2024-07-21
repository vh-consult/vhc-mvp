"use client"
import React, {useState, useEffect} from 'react'
import DrugCard from './DrugCard'
import { fetchFilteredDrugs, getPharmacyInventory } from '@/lib/actions/company.actions'

const DrugListings = ({pharmacyId, query}: {pharmacyId: string, query?: string}) => {
  const [drugs, setDrugs] = useState<any[]>()
  const [filteredDrugs, setFilteredDrugs] = useState<any[]>()
  useEffect(() => {
    const fetchDrugs = async () => {
      const allDrugs = await getPharmacyInventory(pharmacyId)
      setDrugs(allDrugs)
      const filteredDrugs = await fetchFilteredDrugs(pharmacyId, query!)
      setFilteredDrugs(filteredDrugs)
    }
    fetchDrugs()
  }, [pharmacyId])
  return (
    <div className='w-[80%] flex flex-wrap'>

      {
        query? (filteredDrugs && filteredDrugs.map((drug: {
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
        (drugs && drugs.map((drug: {
            imageUrl: string, name: string , numberInStock: number, price: number
            }, index: React.Key | null | undefined) => {
            return(
                <DrugCard
                    name={drug.name}

                    key={index}
                    numberInStock={drug.numberInStock}
                    imageSRC={drug.imageUrl}
                    price={drug.price}
              />
            )
        }))
      }
    </div>
  )
}

export default DrugListings
