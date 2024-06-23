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
    <div className={cn("flex items-center px-6", className)}>
    <div 
      className="w-[45px] h-[45px] flex items-center text-[24px]
      justify-center mr-4 rounded-full border border-dark-4"
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
