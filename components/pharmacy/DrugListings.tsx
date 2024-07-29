"use client"
import React, {useState, useEffect} from 'react'
import DrugCard from './DrugCard'
import { getPharmacyInventory } from '@/lib/actions/inventory.actions'
import DrugOverview from './DrugOverview'
import { useParams } from 'next/navigation'

const DrugListings = ({pharmacyId, query}: {pharmacyId: string, query?: string}) => {
  const [drugs, setDrugs] = useState<any[]>()
  const [drug, setDrug] = useState<any>()
  const [showBuyPopUp, setShowBuyPopUp] = useState<boolean>(false)
  useEffect(() => {
    const fetchDrugs = async () => {
      const allDrugs = await getPharmacyInventory(pharmacyId)
      setDrugs(allDrugs)
    }
    fetchDrugs()
  }, [pharmacyId, query])
  const {id} = useParams()
  return (
    <div className="py-6">
      <h1 className="text-lg font-sembold pl-[5%] ">Available Drugs</h1>
      <div className='w-[90%] mx-auto ptx -3 grid grid-cols-6 '>

        {
          (drugs && drugs.map((drug: {
              image: string, name: string , quantity: number, _id: string, price: number
              }, index: React.Key | null | undefined) => {
              return(
                <div key={index} onClick={() => {
                setDrug(drug)
                setShowBuyPopUp(true)
                }}>
                  <DrugCard
                    name={drug.name}
                    
                    quantity={drug.quantity}
                    imageSRC={drug.image}
                    price={drug.price}
                  />

                </div>
              )
          }))
        }
        {
          showBuyPopUp === true? (
            <DrugOverview
              drug={drug}
              shopId={id as string}
              isOpen = {showBuyPopUp}
              onClose={() => {setShowBuyPopUp(false)}}          
            /> 
          ): ''
        }  
      </div>
    </div>
  )
}

export default DrugListings
