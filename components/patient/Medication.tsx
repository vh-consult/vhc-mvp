import { fetchMeds } from '@/lib/actions/medication.actions';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image'
import React, { useState } from 'react'
import { FaMarker } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

interface MedCardProps {
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
    <div className="w-full">
      <Image 
        src={imageSrc}
        alt={drug + 'image'}
        width={45}
        height={45}
      />
      <div className="flex flex-col">
        <span className="text lg">{drug}</span>
        <span className="text-base">{time.toTimeString()}</span>
        <span className="text-sm">{condition}</span>
      </div>
      <span className="text base">{quantity}</span>
      <span className="">
        {drugsFinished? <FaMarker/> : <MdDelete/>}
      </span>
    </div>
  )
}

const Medication = () => {
  const [currentDrugs, setCurrentDrugs] = useState()
  const {user} = useUser()
  const fetchDrugs = async () => {
    const medDrugs = await fetchMeds(user?.id!)
    // setCurrentDrugs(medDrugs)
  }
  const drugs = [
    {
      imageSrc: '/images/drug 1.jpg',
      drug: '',
      time: new Date(),
      condition: '',
      quantity: 2
    }
  ]
  return (
    <div>
      <div className="w-[350px] h-[400px] rounded-lg bg-dark-1">
        <h3 className="text-sm opacity-75 font-semibold p-3">
          Current Medication
        </h3>

      </div>
    </div>
  )
}

export default Medication
