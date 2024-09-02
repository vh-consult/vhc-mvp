import React from 'react'

interface CompanyHiglightCardProps {
  color: string;
  subtext?: string;
  title: string;
  quantity?: number;
  subtext2?: string;
  quantity2?: string | number;
}

const CompanyHiglightCard = ({color, subtext, title, quantity, quantity2, subtext2}: CompanyHiglightCardProps) => {
  return (
    <div className='w-[250px] hover:bg-slate-100 h-[125px] p-3 flex flex-col justify-center rounded-lg shadow-sm cursor-pointer bg-white'>
      <h1 className="text-base">
        {title}
      </h1>
      <span className={`w-6 h-6 bg-${color} rounded-full`}></span>
      <div className="flex flex-between">
        <div className="">
          <h1 className="text-xl font-semibold ">
            {quantity}
          </h1>
          <p className="text-xs leading-none">{subtext} </p>
        </div>
        <div className="">
          <h1 className="text-xl text-end font-semibold ">
            {quantity2}
          </h1>
          <p className="text-xs leading-none">{subtext2} </p>
        </div>
      </div>
    </div>
  )
}

export default CompanyHiglightCard
