"use client"
import React, {useState} from 'react'
import { Button } from '../ui/button'
import { BiFilter, BiPlus } from 'react-icons/bi'
import { Input } from '../ui/input'
import SearchBar from '../general/SearchBar'
import AddToInventory from './AddToInventory'
import HighlightCard from '../general/HighlightCard'

const InventoryHeader = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false)
  return (
    <section className="w-full flex flex-col mb-6">
      <div className="flex flex-between w-full">
        {/* <HighlightCard/> */}
      </div>
      <div className='w-full flex flex-between'>
        <SearchBar 
          className=' w-1/3 h-full rounded-full bg-gray-100 shadow-sm border-none'
        />
        <div className="flex items-center">
          <Button 
              className='bg-green-2 h-10 mr-4 text-white' 
              onClick={()=>setShowPopup(!showPopup)}
          >
              Add Item 
              <BiPlus className='font-bold text-xl'/> 
          </Button>
          <span className="w-10 h-10 rounded-md text-xl flex flex-center bg-gray-100 border-2">
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
