"use client"
import { fetchMeds } from '@/lib/actions/medication.actions';
import Image from 'next/image';
import React, { useState } from 'react'
import { BiCheck, BiDotsHorizontal } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

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
      <div className="w-full min-h-[150px] flex flex-col glassmorphism shadow p-2 hover:bg-secondary ">
        <div className="flex flex-between">
          <Image 
            src={imageSrc}
            alt={drug + 'image'}
            width={40}
            height={40}
            className='w-[40px] h-[40px] object-cover'
          />
          <span className="p-2 rounded-full hover:bg-white cursor-pointer">
            <BiDotsHorizontal/>
          </span>
        </div>
        <div className="flex flex-col ">
          <span className="w-full"> 
            <span className="text-sm mr-2 font-medium w-[30%]">
            Drug:
            </span>  
             {drug}
          </span>
          <span className="">
            <span className="text-sm mr-2 font-medium w-[30%]">
              Time:
            </span> 
            {time.toLocaleTimeString()}
          </span>
          <span className="">
            <span className="text-sm mr-2 font-medium w-[30%]">
                Caution:
            </span>
            {condition}
          </span>
        </div>
        <span className="">
          <span className="text-sm mr-2 font-medium w-[30%]">
            Dose:
          </span>
          {quantity}
        </span>
      </div>
    )
  }

export default MedCard