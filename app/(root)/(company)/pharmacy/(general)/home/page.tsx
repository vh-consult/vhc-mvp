import ShopCard from '@/components/pharmacy/ShopCard'
import React, { Suspense } from 'react'
import { getAllPharmacyShops } from '@/lib/actions/company.actions'
import { redirect } from 'next/navigation';


interface ShopProps {
  _id: string;
  logo: string;
  name: string;
  distance: string;
  isOpen: boolean;
  location: string;
}

const PharmacyHomePage = async () => {
  const shops = await getAllPharmacyShops()
  return (
    <div className='px-10 grid grid-cols-5
      gap-10 pt-6'>
        {
          shops.map((shop: ShopProps) => (
            <ShopCard
              key={shop._id}
              name={shop.name}
              distance_by_car={6}
              distance_by_walk={10}
              imageSrc={shop.logo}
              location={shop.location}
              number_of_stars={3.8}
              _id={shop._id}
            />
          ))
        }
    </div>
  )
}

export default PharmacyHomePage
