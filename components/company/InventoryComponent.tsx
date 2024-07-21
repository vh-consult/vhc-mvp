import React from 'react'
import DrugListings from '../pharmacy/DrugListings'
import InventoryHeader from './InventoryHeader'

const InventoryComponent = ({companyId}: {companyId: string}) => {
  const headers = [
    {
      label: '',
    },
  ]
  return (
    <div>
      <InventoryHeader/>
      <DrugListings pharmacyId={companyId}  />
      <div className=""></div>
    </div>
  )
}

export default InventoryComponent
