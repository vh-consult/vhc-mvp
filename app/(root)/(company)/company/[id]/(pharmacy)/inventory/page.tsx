import InventoryList from '@/components/pharmacy/InventoryList'
import React from 'react'

const CompanyInventoryPage = ({params}: {params: {id: string}}) => {
  return (
    <div>
      <InventoryList pharmacyId={params.id}/>
    </div>
  )
}

export default CompanyInventoryPage
