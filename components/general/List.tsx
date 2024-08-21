import Image from 'next/image'
import React from 'react'

export interface PartDataProps {
  header?: string;
  data: number | string
}

export interface IconProps {
  icon: JSX.Element;
  action: () => void
}

interface ListProps {
  imageSrc?: string;
  title: string;
  subtitle: string;
  descriptionBelowSubtitle?: string;
  parts: Array<PartDataProps>;
  icons?: Array<IconProps>
}

const List = ({
  imageSrc,
  title,
  subtitle,
  descriptionBelowSubtitle,
  parts, 
  icons,
}: ListProps) => {
  return (
    <div className='w-full px-1 hover:bg-gray-100 mx-auto py-2 flex flex-between'>
      <div className="flex items-center">
        {imageSrc && <Image
          alt='drug image'
          src={'/images/drug 4.jpg'}
          width={50}
          height={50}
          className='w-[85px] h-[100px] mr-3 rounded-md object-cover'
        />}
        <div className="">
          <h2 className="text-lg font-semibold leading-tight">{title}</h2>
          <p className="text-base font-normal capitalize">{subtitle}</p>
          <p className="text-sm opacity-75">{descriptionBelowSubtitle}</p>
        </div>
      </div>
      {
        parts.map((part, index)=>{
          return(
            <div key={index} className="flex flex-col">
              <span className="text-sm opacity-75">{part.header}</span>
              <span className="text-xl mt-3">{part.data}</span>
            </div>
          )
        })
      }
      {
        icons?.map((icon, index) => (
        <span key={index} className='hover:cursor-pointer border-2 
         hover:bg-green-1 w-[45px] h-[45px] 
        flex flex-center rounded-full' onClick={icon.action}>
          {icon.icon}
        </span>
        ))
      }
    </div>
  )
}

export default List
