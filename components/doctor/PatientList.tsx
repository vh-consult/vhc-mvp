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
}

const PatientList = ({
    name, email, 
    gender, 
    age, imageSrc
}: PatientProps) => {
  return (
    <div className="grid grid-cols-5 hover:bg-gray-100 border-t border-t-green-1 h-[45px] px-5 bg-white w-full items-center ">
        <span className="flex rounded-full w-full">
            <Image
                width={30}
                height={30} 
                src={imageSrc} 
                alt="" 
                className="w-[30px] h-[30px] rounded-full object-cover mr-4" 
            />
            {name}
        </span>
        <span className="ml-10 capitalize">
            {gender}
        </span>
        <span className="ml-10 ">
            {age}
        </span>
        <span className="lowercase ml-[-20px]">
            {email && email}
        </span>
        <div className="flex ml-10">
            <span className="w-[30px] h-[30px] hover:bg-gray-200 hover:text-whitish-violet mr-2 border border-gray-200 flex items-center justify-center rounded-md">
                <BsChat />
            </span>
            <span className="w-[30px] h-[30px] hover:bg-gray-200 hover:text-whitish-violet border border-gray-200 flex items-center justify-center rounded-md">
                <BiCalendar />
            </span>
            <span className="w-[30px] h-[30px] hover:bg-gray-200 hover:text-whitish-violet ml-2 border border-gray-200 flex items-center justify-center rounded-md">
                <DiDatabase />
            </span>
        </div>
      </div>
  )
}

export default PatientList
