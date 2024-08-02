import Image from 'next/image';
import React from 'react'

type CardProps = {
  image: string;
  name: string;
  finishedDate: Date
}

const Card = ({image, name, finishedDate}: CardProps) => {
  return(
    <div className="">
      <Image
        src={image}
        alt='drug_image'
        width={45}
        height={45}
        className='object-cover rounded-md'
      />
      <div className="">
        <h2 className="text-lg">{name}</h2>
        <p className="">{new Date(finishedDate).toLocaleDateString()}</p>
      </div>
    </div>
  )
}

const OutOfStockList = () => {
  return (
    <div>
      
    </div>
  )
}

export default OutOfStockList
