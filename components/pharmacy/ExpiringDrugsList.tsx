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
      <div>
        <Image 
          src={image}
          alt='drug_image'
          width={60}
          height={60}
          className='rounded-md object-cover'
        />
        <div className="">
          <h3 className="text-lg font-meium">{name}</h3>
          <p className="flex">
            <span>{new Date(expiryDate).toLocaleDateString()}</span>
            <span className="">{quantity}</span>
          </p>
        </div>
      </div>
    )
  }
  

const ExpiringDrugsList = ({drugs}: {drugs: Array<any>}) => {
  return (
    <div>
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
