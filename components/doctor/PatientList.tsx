import Image from 'next/image';
import React from 'react'
import { BiCalendar } from 'react-icons/bi';
import { BsChat } from 'react-icons/bs';
import { DiDatabase } from 'react-icons/di';

interface PatientProps {
    name: string;
    age: number;
    gender: 'Male' | 'Female';
    complaint?: string;
    email?: string;
    imageSrc: string;
    insurancePlan?: 'PersonalCare' | 'FamilyCare' | 'Unlimited'

}

const PatientList = ({
    name, email, 
    insurancePlan, gender, 
    age, imageSrc
}: PatientProps) => {
  return (
    <div className="flex  border-t border-t-dark-1 h-[45px] px-5 bg-dark-2 w-full items-center justify-between">
        <span className="flex rounded-full w-2/6">
            <Image
                width={30}
                height={30} 
                src={imageSrc} 
                alt="" 
                className="w-[30px] h-[30px] rounded-full object-cover mr-4" 
            />
            {name}
        </span>
        <span className="w-1/12">
            {gender}
        </span>
        <span className="w-1/12">
            {age}
        </span>
        <span className="w-1/6">
            {email && email}
        </span>
        <span className="w-1/6">
            {insurancePlan && insurancePlan}
        </span>
        <div className="flex ">
            <span className="w-[30px] h-[30px] hover:bg-saturated-purple hover:text-whitish-violet mr-2 border border-saturated-purple flex items-center justify-center rounded-md">
                <BsChat />
            </span>
            <span className="w-[30px] h-[30px] hover:bg-saturated-purple hover:text-whitish-violet border border-saturated-purple flex items-center justify-center rounded-md">
                <BiCalendar />
            </span>
            <span className="w-[30px] h-[30px] hover:bg-saturated-purple hover:text-whitish-violet ml-2 border border-saturated-purple flex items-center justify-center rounded-md">
                <DiDatabase />
            </span>
        </div>
      </div>
  )
}

export default PatientList
