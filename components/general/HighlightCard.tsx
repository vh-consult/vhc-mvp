import { cn } from '@/lib/utils';
import React from 'react'


interface HighlightCardProps {
    title: string;
    icon?: JSX.Element;
    value: string;
    className?: string;
  }

const HighlightCard = ({
    title, 
    icon, 
    value,
    className
}: HighlightCardProps) => {
  return (
    <div className={cn("flex items-center px-2", className)}>
    <div 
      className="w-[45px] h-[45px] flex items-center text-[24px]
      justify-center mr-4 rounded-full border-none bg-white"
    >
      {icon }
    </div>
    <div>
      <h6 className="text-sm font-medium opacity-75">
        {title}
      </h6>
      <p className="text-3xl mt-2">
        {value}
      </p>
    </div>
  </div>
  )
}

export default HighlightCard
