import DrugCard from '@/components/pharmacy/DrugCard'
import DrugListings from '@/components/pharmacy/DrugListings'
import SearchArea from '@/components/pharmacy/SearchArea'
import { getPharmacyInventory } from '@/lib/actions/company.actions'
import React from 'react'

const ShopPage = async ({  
  params,
  searchParams
}: {
  searchParams?: {
    query?: string;
    ShopPage?: string
  },
  params: {id: string}
}
) => {
  const query = searchParams?.query || ''
  return (
    <div>
      <SearchArea/>
      <DrugListings pharmacyId={params.id} query={query}/>
    </div>
  )
}

export default ShopPage
