import InventoryHeader from '@/components/pharmacy/InventoryHeader'
import InventoryList from '@/components/pharmacy/InventoryList'
import React from 'react'

const CompanyInventoryPage = ({params}: {params: {id: string}}) => {
  return (
    <div>
      <InventoryHeader/>
      <InventoryList pharmacyId={params.id}/>
    </div>
  )
}

export default CompanyInventoryPage
