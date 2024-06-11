import ShopCard from '@/components/pharmacy/ShopCard'
import React from 'react'

const PharmacyHomePage = () => {
  return (
    <div>
      <ShopCard
        distance_by_car={12}
        distance_by_walk={10}
        imageSrc='/images/hosp-1.jpg'
        location='Aydeuase'
        name='K-Pharma'
        number_of_stars={3.8}
      />
    </div>
  )
}

export default PharmacyHomePage
