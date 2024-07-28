"use client"
import React, {useState, useEffect} from 'react'
import DrugCard from './DrugCard'
import { getPharmacyInventory } from '@/lib/actions/inventory.actions'
import DrugOverview from './DrugOverview'

const DrugListings = ({pharmacyId, query}: {pharmacyId: string, query?: string}) => {
  const [drugs, setDrugs] = useState<any[]>()
  const [showBuyPopUp, setShowBuyPopUp] = useState<boolean>(false)
  // const [filteredDrugs, setFilteredDrugs] = useState<any[]>()
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
    <div className="py-6" onClick={()=>{setShowBuyPopUp(true)}}>
      <h1 className="text-lg font-sembold pl-[5%] ">Available Drugs</h1>
      <div className='w-[90%] mx-auto ptx -3 grid grid-cols-6 '>

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
        {
          showBuyPopUp === true? (
            <DrugOverview
              imageSrc='/images/drug 0.jpg'
              isOpen = {showBuyPopUp}
              name='Simadold dh'
              numberOfStock={3}
              onClose={() => {setShowBuyPopUp(false)}}
              price={34}

            /> 
          ): ''
        }
      </div>
    </div>
  )
}

export default DrugListings
