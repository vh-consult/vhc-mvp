"use client"
import { fetchMeds } from '@/lib/actions/medication.actions'
import React, {useEffect, useState} from 'react'
import MedCard, { MedCardProps } from './MedCard'
import Cookies from "js-cookie"

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

const Medication = () => {
  const user = JSON.parse(Cookies.get("user") || '{}');
  const [currentDrugs, setCurrentDrugs] = useState()
  const fetchDrugs = async () => {
    const medDrugs = await fetchMeds(user?.id as string)
    setCurrentDrugs(medDrugs)
  }
  return (
      <div className="w-[60%]  h-[400px] rounded-lg bg-white">
        <div className="w-full p-3 flex flex-row flex-between">
          <h3 className="text-sm opacity-75 font-semibold ">
            Current Medication
          </h3>
          <span className="hover:text-blue-1 cursor-pointer underline">
            see all
          </span>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          {
              data.map((card:MedCardProps, index:number) => (
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
      </div>
  )
}

export default Medication
