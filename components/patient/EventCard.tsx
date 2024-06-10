import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

interface EventCardProps {
    header: string,
    body: string,
    imageSrc?: string,
    primaryButtonColor?: string,
    secondaryButtonBorderColor?: string,
    primaryButtonText?: string,
    secondaryButtonText?: string,
    className?: string
  }

const EventCard = ({
    header,
    body,
    imageSrc,
    primaryButtonText,
    secondaryButtonText,
}: EventCardProps) => {
  return (
    <div className='flex items-start mt-3 w-full h-[80%] '>
    <div className='w-[60%] h-full'>
      <h2 className='text-2xl w-[80%] font-semibold py-2'>
        {header}
      </h2>
      <p className='pb-2 w-[95%]'>
        {body}
      </p>
      <div className='flex flex-row'>
        <span className='mr-2'>
          {
            primaryButtonText ?
            <Button 
              className='bg-white text-blue 
                font-medium w-[120px] h-[35px] rounded-md 
                hover:opacity-90 hover:shadow-md'
            > 
              {primaryButtonText} 
            </Button> : ''
          }
        </span>
        <span>
          {
            secondaryButtonText?
            <Button
              className='border border-white text-white px-2 
                h-[35px] rounded-md hover:bg-white 
                hover:text-blue'
            >
              {secondaryButtonText}
            </Button> : ''
          }
        </span>
      </div>
    </div>
    <div className='w-[40%] h-[270px]'>
      {imageSrc && 
      <Image
        alt=''
        width={100}
        height={100}
        src={imageSrc} 
        className="w-full h-full object-cover" 
      />}
    </div>
  </div>
  )
}

export default EventCard
