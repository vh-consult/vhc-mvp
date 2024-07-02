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
  

const MedCard = ({
    imageSrc, drug, time,
    condition, quantity
  }: MedCardProps) => {
    const [drugsFinished, setDrugsFinished] = useState<boolean>(false)
  
    return(
      <div className="w-full flex flex-between px-4 py-2 hover:bg-dark-3 ">
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
        <span className="w-[30px] h-[30px] rounded-full border border-dark-4 flex flex-center hover:bg-dark-4 ">
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
          hd
        </div>
    )
  }
export default MedList
