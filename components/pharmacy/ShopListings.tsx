import React from 'react'
import ShopCard from './ShopCard'
import Link from 'next/link'
import { getAllPharmacyShops } from '@/lib/actions/company.actions'

const ShopListings = async () => {
  const shops = await getAllPharmacyShops()
  console.log(shops)
  return (
    <div className='w-[80%] flex flex-wrap'>
      {
        shops.map((shop: any, index: number) => (
              <Link
                key={index}
                href={`/pharmacy/shop/${shop?._id}`}
              >
                <ShopCard
                    name={shop?.name}
                    distance_by_car={6}
                    distance_by_walk={10}
                    imageSrc={shop?.logo}
                    location={shop?.location}
                    number_of_stars={3.8}
              />
              </Link>
            )
        )
      }
    </div>
  )
}

export default ShopListings
