import Loader from '@/components/general/Loader'
import ShopCard from '@/components/pharmacy/ShopCard'
import ShopListings from '@/components/pharmacy/ShopListings'
import React, { Suspense } from 'react'
import {v2 as cloudinary} from 'cloudinary'
import { getAllPharmacyShops } from '@/lib/actions/company.actions'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

interface ShopProps {
  image: string;
  name: string;
  distance: string;
  isOpen: boolean;
  location: string;
}

const PharmacyHomePage = async () => {
  const shops = await getAllPharmacyShops()
  return (
    <div className='px-10 grid grid-cols-5
      gap-10 pt-20'>
        {
          shops.map((shop: ShopProps) => (
            <ShopCard
              key={shop.name}
              name={shop.name}
              distance_by_car={6}
              distance_by_walk={10}
              imageSrc={shop.image}
              location={shop.location}
              number_of_stars={3.8}
            />
          ))
        }
    </div>
  )
}

export default PharmacyHomePage
