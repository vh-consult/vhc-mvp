import { Pharmacy } from '@/lib/database/models/company.model'
import React from 'react'
import ShopCard from './ShopCard'

const ShopListings = async () => {
  const shops = await Pharmacy.find()
  return (
    <div className='w-[80%] flex flex-wrap'>
      {
        shops.map((shop, index) => {
            return(
                <ShopCard
                    name={shop.name}
                    key={index}
                    distance_by_car={6}
                    distance_by_walk={10}
                    imageSrc={shop.image}
                    location={shop.location}
                    number_of_stars={3.8}
              />
            )
        })
      }
    </div>
  )
}

export default ShopListings
