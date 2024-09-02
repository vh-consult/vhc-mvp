"use client"
import React, {useState} from 'react'
import { Button } from '../ui/button'
import { BiFilter, BiPlus } from 'react-icons/bi'
import SearchBar from '../general/SearchBar'
import AddToInventory from './AddToInventory'
import CompanyHiglightCard from './CompanyHiglightCard'

const InventoryHeader = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false)
  return (
    <section className="w-full flex flex-col mb-6">
      <div className="flex flex-between w-full mb-3">
        <CompanyHiglightCard
          color='red-400'
          title='Expiring'
          quantity={12}
          subtext='Total items'
        />
        <CompanyHiglightCard
          color='gray-300'
          title='Out of Stock'
          quantity={4}
          subtext='Since 12/06/2024'
        />
        <CompanyHiglightCard
          color='green-400'
          title='Most Purchased'
          quantity2={120}
          quantity={5}
          subtext2='Total Demand'
          subtext='This Week'
        />
        <CompanyHiglightCard
          color='gray-400'
          title='Limited '
          quantity={5}
          subtext='In stock'
        />
      </div>
      <div className='w-full flex flex-between'>
        <SearchBar 
          className=' w-1/3 h-full rounded-full bg-white shadow-sm border-none'
        />
        <div className="flex items-center">
          <Button 
              className='bg-green-2 h-10 mr-4 text-white' 
              onClick={()=>setShowPopup(!showPopup)}
          >
              Add Item 
              <BiPlus className='font-bold text-xl'/> 
          </Button>
          <span className="w-10 h-10 rounded-md text-xl flex flex-center bg-white shadow-sm">
              <BiFilter/>
          </span>
        </div>
        {
          showPopup === true ? (
              <AddToInventory show={showPopup} onClose={()=>setShowPopup(!showPopup)}/>
          ) : ''
        }
      </div>
    </section>

  )
}

export default InventoryHeader
