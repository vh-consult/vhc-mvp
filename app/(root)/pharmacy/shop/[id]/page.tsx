import DrugCard from '@/components/pharmacy/DrugCard'
import SearchArea from '@/components/pharmacy/SearchArea'
import React from 'react'

const ShopPage = () => {
  return (
    <div>
      <SearchArea/>
      <div className="">
        <DrugCard
          imageSRC='/images/drug 1.jpg'
          name='Luzart FC'
          numberInStock={200}
          price={120}
        />
      </div>
    </div>
  )
}

export default ShopPage
