"use client"
import DrugListings from '@/components/pharmacy/DrugListings'
import SearchArea from '@/components/pharmacy/SearchArea'
import { useRouter } from 'next/router'
import React from 'react'

const ShopPage = (
) => {
  const router = useRouter()
  const query = router.query.searchParams || ''
  return (
    <div>
      <SearchArea/>
      <DrugListings pharmacyId={router.query.id as string} query={query as string}/>
    </div>
  )
}

export default ShopPage
