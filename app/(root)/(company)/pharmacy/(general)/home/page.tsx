import ShopCard from '@/components/pharmacy/ShopCard'
import React, { Suspense } from 'react'
import { getAllPharmacyShops } from '@/lib/actions/company.actions'
import { redirect } from 'next/navigation';
import Link from 'next/link';


interface ShopProps {
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
          shops.length > 0 ? shops.map((shop: ShopProps|any) => (
            <Link
            key={shop?._id}
            href={`/pharmacy/shop/${shop?._id}`}
          >
            <ShopCard
              name={shop.name}
              distance_by_car={6}
              distance_by_walk={10}
              imageSrc={shop.logo}
              location={shop.location}
              number_of_stars={3.8}
            />
          </Link>
          )): (
            <span className="">No registered pharmacy shops</span>
          )
        }
    </div>
  )
}

export default PharmacyHomePage
