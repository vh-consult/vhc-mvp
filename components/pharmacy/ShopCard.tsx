import React from 'react'
import { BiCar } from 'react-icons/bi'
import { BsStarFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go'
import { PiPerson } from 'react-icons/pi'
import Image from 'next/image';

interface PharmacyShopCardProps {
  imageSrc: string;
  name: string;
  location: string;
  distance_by_car: number;
  distance_by_walk: number;
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
    <div className="w-[200px] h-[225px] cursor-pointer hover:opacity-90 bg-dark-3 text-green-1 
    -200 rounded-xl hover:shadow-lg">
    <div className="h-[55%] w-full ">
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
        <div className="w-full">
            <h4 className="text-lg font-bold">
              {name}
            </h4>
            <div className="flex flex-between ">
              <p className="text-sm flex items-center
              font-medium opacity-75">
                <GoLocation className='w-4 mr-1 h-4'/>
                {location}
              </p>
              <span className="flex text-sm items-center">
                <BsStarFill className="mr-1 text-yellow-500"/>  
                {number_of_stars} 
              </span>
            </div>
        </div>

    </div>
    <div className="px-2 flex items-center justify-between 
    text-[12px]">
        <div className="flex items-center ">
            <span className="flex items-center mr-2">
                <PiPerson className="mr-1"/> 
                {distance_by_walk} mins
            </span>
            <span className="flex items-center">
                <BiCar className="mr-1"/> 
                {distance_by_car} mins
            </span>
        </div>

    </div>
  </div>
  )
}

export default ShopCard
