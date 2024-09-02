import Image from 'next/image';
import React from 'react'

type CardProps = {
  image: string;
  name: string;
  finishedDate: Date
}

const Card = ({image, name, finishedDate}: CardProps) => {
  return(
    <div className="flex p-3 cursor-pointer hover:bg-red-50">
      <Image
        src={image}
        alt='drug_image'
        width={45}
        height={45}
        className='object-cover mr-2 w-[45px] h-[45px] rounded-md'
      />
      <div className="">
        <h2 className="text-lg font-medium">{name}</h2>
        <p className="">Finished on: {new Date(finishedDate).toLocaleDateString()}</p>
      </div>
    </div>
  )
}

const OutOfStockList = ({finishedDrugs}: {finishedDrugs: Array<any>}) => {
  return (
    <div className='flex flex-col gap-2'>
      {
        finishedDrugs.length > 0 ? (
          finishedDrugs.map((drug, index) => (
            <Card
              finishedDate={drug.finishedDate}
              image={drug.image}
              name={drug.name}
              key={index}
            />
          ))
        ): (
          <span className="">No drugs out if stock</span>
        )
      }
    </div>
  )
}

export default OutOfStockList
