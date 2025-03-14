"use client"
import Loader from '@/components/general/Loader'
import InventoryHeader from '@/components/pharmacy/InventoryHeader'
import InventoryList from '@/components/pharmacy/InventoryList'
import React, { Suspense } from 'react'
import { useRouter } from 'next/router'
const CompanyInventoryPage = () => {
  const router = useRouter()
  return (
    <div>
      <InventoryHeader/>
      <InventoryList pharmacyId={router.query.id as string}/>
    </div>
  )
}

export default CompanyInventoryPage
