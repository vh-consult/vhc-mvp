import React from 'react'
import DrugListings from '../pharmacy/DrugListings'

const InventoryComponent = ({companyId}: {companyId: string}) => {
  const headers = [
    {
      label: '',
    },
  ]
  return (
    <div>
      <div className="">
        <span className=""></span>
        <div className="">
          <span className=""></span>
        </div>
      </div>

     <DrugListings pharmacyId={companyId}  />
     <div className=""></div>
    </div>
  )
}

export default InventoryComponent
