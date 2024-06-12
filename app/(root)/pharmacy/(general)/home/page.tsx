import Loader from '@/components/Loader'
import ShopCard from '@/components/pharmacy/ShopCard'
import ShopListings from '@/components/pharmacy/ShopListings'
import React, { Suspense } from 'react'

const PharmacyHomePage = async () => {
  const response = await fetch('',{
    next: {
      revalidate: 3600,
    }
  })
  const data = await response.json()
  return (
    <div>
      All pharmacies
      <Suspense fallback={<Loader/>}>
        <ShopListings/>
      </Suspense>
    </div>
  )
}

export default PharmacyHomePage
