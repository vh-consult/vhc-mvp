import React from 'react'
import DrugListings from '../pharmacy/DrugListings'
import InventoryHeader from '../pharmacy/InventoryHeader'

const InventoryComponent = ({companyId}: {companyId: string}) => {
  const headers = [
    {
      label: '',
    },
  ]
  return (
    <div>
      <InventoryHeader/>
    </div>
  )
}

export default InventoryComponent
