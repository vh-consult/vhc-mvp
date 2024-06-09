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
    <div className="flex  border-t h-[45px] px-5 bg-white w-full items-center justify-between">
        <span className="w-[30px]  h-[30px] rounded-full">
            <img 
                src={imageSrc} 
                alt="" 
                className="w-full h-full rounded-full object-cover" 
            />
        </span>
        <span className="">
            {name}
        </span>
        <span className="">
            {gender}
        </span>
        <span className="">
            {age}
        </span>
        <span className="">
            {email && email}
        </span>
        <span className="">
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
