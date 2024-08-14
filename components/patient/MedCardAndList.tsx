"use client"
import { fetchMeds } from '@/lib/actions/medication.actions';
import Image from 'next/image';
import React, { useState } from 'react'
import { BiCheck } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { useUser } from '@clerk/nextjs';

export interface MedCardProps {
    imageSrc: string;
    drug: string;
    time: Date;
    condition: string;
    quantity: number
  }

const data =[
  {
    imageSrc: '/images/drug 5.jpg',
    drug: 'Zimadal 50mg',
    time: new Date(0, 0, 0, 11, 30),
    condition: 'Before Meal',
    quantity: 4
  },
  {
    imageSrc: '/images/drug 5.jpg',
    drug: 'Zimadal 50mg',
    time: new Date(0, 0, 0, 11, 30),
    condition: 'Before Meal',
    quantity: 4
  },
  {
    imageSrc: '/images/drug 5.jpg',
    drug: 'Zimadal 50mg',
    time: new Date(0, 0, 0, 11, 30),
    condition: 'Before Meal',
    quantity: 4
  },
  {
    imageSrc: '/images/drug 5.jpg',
    drug: 'Zimadal 50mg',
    time: new Date(0, 0, 0, 11, 30),
    condition: 'Before Meal',
    quantity: 4
  },
  {
    imageSrc: '/images/drug 5.jpg',
    drug: 'Zimadal 50mg',
    time: new Date(0, 0, 0, 11, 30),
    condition: 'Before Meal',
    quantity: 4
  },
  {
    imageSrc: '/images/drug 5.jpg',
    drug: 'Zimadal 50mg',
    time: new Date(0, 0, 0, 11, 30),
    condition: 'Before Meal',
    quantity: 4
  },
  {
    imageSrc: '/images/drug 5.jpg',
    drug: 'Zimadal 50mg',
    time: new Date(0, 0, 0, 11, 30),
    condition: 'Before Meal',
    quantity: 4
  },
]

const MedCard = ({
    imageSrc, drug, time,
    condition, quantity
  }: MedCardProps) => {
    const [drugsFinished, setDrugsFinished] = useState<boolean>(false)
  
    return(
      <div className="w-full flex flex-between bg-white px-4 py-2 hover:bg-gray-100 ">
        <Image 
          src={imageSrc}
          alt={drug + 'image'}
          width={100}
          height={85}
          className='w-1/6'
        />
        <div className="flex flex-col w-3/6">
          <span className="text lg">{drug}</span>
          <span className="text-sm">{time.toLocaleTimeString()}</span>
          <span className="text-xs">{condition}</span>
        </div>
        <span className="text base w-1/6">{quantity}</span>
        <span className="w-[30px] h-[30px] rounded-full bg-green-1 flex flex-center hover:bg-white ">
          {drugsFinished? <MdDelete/> : <BiCheck/>}
        </span>
      </div>
    )
  }

  const MedList = () => {
  const {user} = useUser() 
  const [currentDrugs, setCurrentDrugs] = useState()
  const fetchDrugs = async () => {
    const medDrugs = await fetchMeds(user?.id!)
    setCurrentDrugs(medDrugs)
  }
    return (
        <div>
          {
            data.map((card, index) => (
              <MedCard 
                condition={card.condition}
                drug={card.drug}
                imageSrc={card.imageSrc}
                quantity={card.quantity}
                time={card.time}
                key={index}
              />
            )).slice(0, 3)
          }
        </div>
    )
  }
export default MedList
