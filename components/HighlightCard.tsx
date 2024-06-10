import React from 'react'


interface HighlightCardProps {
    title: string;
    icon: JSX.Element;
    value: string
  }

const HighlightCard = ({
    title, 
    icon, 
    value
}: HighlightCardProps) => {
  return (
    <div className="flex items-center ">
    <div 
      className="w-[30px] h-[30px] flex items-center 
      justify-center mr-2 rounded-full border"
    >
      {icon}
    </div>
    <div>
      <h6 className="text-sm font-medium oppacity-75">
        {title}
      </h6>
      <p className="text-3xl oppacity-75">
        {value}
      </p>
    </div>
  </div>
  )
}

export default HighlightCard
