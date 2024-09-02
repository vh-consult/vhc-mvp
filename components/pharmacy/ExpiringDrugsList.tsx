import Image from 'next/image';
import React from 'react'

type ExpiryDrugProps = {
  image: string;
  name: string;
  quantity: number;
  expiryDate: Date
}

const ExpiringDrugCard = ({name, quantity, expiryDate, image}: ExpiryDrugProps) => {
    return (
      <div className='w-full flex p-3 cursor-pointer hover:bg-pink-50'>
        <Image 
          src={image}
          alt='drug_image'
          width={60}
          height={60}
          className='w-[60px] h-[60px] mr-2 rounded-md object-cover'
        />
        <div className="">
          <h3 className="text-xl font-medium">{name}</h3>
          <p className="flex flex-col">
            <span>Expiry Date: {new Date(expiryDate).toLocaleDateString()}</span>
            <span className="">Quantity: {quantity}</span>
          </p>
        </div>
      </div>
    )
  }
  

const ExpiringDrugsList = ({drugs}: {drugs: Array<any>}) => {
  return (
    <div className='flex flex-col gap-2'>
      {
        drugs.length > 0? drugs.map((drug, index) => (
          <ExpiringDrugCard 
            name={drug.name}
            image={drug.image}
            quantity={drug.quantity}
            expiryDate={drug.expiryDate}
            key={index}
          />
        )): (
          <span className="text-sm">No expiring drugs</span>
        )
      }
    </div>
  )
}

export default ExpiringDrugsList
