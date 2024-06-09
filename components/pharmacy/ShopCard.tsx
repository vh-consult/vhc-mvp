import Image from 'next/image';
import React from 'react'
import { BiCar } from 'react-icons/bi'
import { BsStarFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go'
import { PiPerson } from 'react-icons/pi'

interface PharmacyShopCardProps {
  imageSrc: string;
  name: string;
  location: string;
  distance_by_car: string;
  distance_by_walk: string;
  number_of_stars: number;
}

const ShopCard = ({
  imageSrc, 
  name, 
  location,
  distance_by_walk,
  distance_by_car,
  number_of_stars
}: PharmacyShopCardProps) => {
  return (
    <div className="w-[200px] h-[225px] border border-gray
    -200 rounded-xl hover:shadow-lg">
    <div className="h-[55%] w-full">
        <Image
          alt='' 
          width={100}
          height={100}
          src={imageSrc} 
          className="h-full w-full rounded-t-xl 
          object-cover" 
        />
    </div>
    <div className="p-2 flex items-center justify-between">
        <div className="">
            <h4 className="text-lg font-bold">
              {name}
            </h4>
            <p className="text-sm font-medium opacity-75">
              {location}
            </p>
        </div>
        <span className="w-7 h-7 rounded-full border 
        flex items-center justify-center">
            <GoLocation/>
        </span>
    </div>
    <div className="px-2 flex items-center justify-between 
    text-[12px]">
        <div className="flex items-center ">
            <span className="flex items-center mr-2">
                <PiPerson className="mr-1"/> 
                {distance_by_walk}
            </span>
            <span className="flex items-center">
                <BiCar className="mr-1"/> 
                {distance_by_car}
            </span>
        </div>
      <span className="flex items-center">
        {number_of_stars} 
        <BsStarFill className="ml-1 text-yellow-500"/>  
      </span>
    </div>
  </div>
  )
}

export default ShopCard
