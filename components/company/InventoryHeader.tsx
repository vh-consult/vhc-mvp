"use client"
import React, {useState} from 'react'
import { Button } from '../ui/button'
import { BiFilter, BiPlus } from 'react-icons/bi'
import { Input } from '../ui/input'
import SearchBar from '../general/SearchBar'
import AddToInventory from '../pharmacy/AddToInventory'

const InventoryHeader = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false)
  return (
    <div className='w-full flex flex-between'>
      <SearchBar 
        className='w-1/3 h-10 rounded-full bg-dark-3 border-none'
      />
      <div className="flex items-center">
        <Button 
            className='bg-green-2 h-10 mr-4' 
            onClick={()=>setShowPopup(!showPopup)}
        >
            Add Item 
            <BiPlus className='font-bold text-xl'/> 
        </Button>
        <span className="w-10 h-10 rounded-md text-xl flex flex-center border-2 border-green-1">
            <BiFilter/>
        </span>
      </div>
      {
        showPopup === true ? (
            <AddToInventory show={showPopup} onClose={()=>setShowPopup(!showPopup)}/>
        ) : ''
      }
    </div>
  )
}

export default InventoryHeader
