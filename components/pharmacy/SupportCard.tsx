import React from 'react'

interface SupportCardProps {
    icon: JSX.Element;
    title_1: string;
    title_2?: string;
    content: string;
    className: string;
  }  

const SupportCard = ({
    icon,
    title_1,
    title_2,
    content,
    className
}: SupportCardProps) => {
  return (
    <div className={`${className} bg-white rounded-lg border hover:cursor-pointer hover:shadow-md flex flex-col items-center justify-center`}>
      <span className="w-[45px] text-[24px] mb-2 h-[45px] rounded-full border border-gray-400 flex items-center justify-center">
        {icon}
      </span>
      <span className="font-medium">
        {title_1}
      </span>
      <span className=" font-medium">
        {title_2 && title_2}
      </span>
      <span className="text-sm text-center w-[80%] mt-2">
        {content}
      </span>
    </div>
  )
}

export default SupportCard
