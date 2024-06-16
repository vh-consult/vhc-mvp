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
    <div className='w-[90%] px-1 hover:bg-dark-3 mx-auto py-2 flex flex-between'>
      <div className="flex items-center">
        {imageSrc && <Image
          alt='drug image'
          src={'/images/drug 4.jpg'}
          width={50}
          height={50}
          className='w-[85px] h-[100px] mr-3 rounded-md object-cover'
        />}
        <div className="">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-base font-normal">{subtitle}</p>
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
        icons?.map(icon => (
        <span className='hover:cursor-pointer border-2 
        border-dark-3 hover:bg-dark-4 w-[45px] h-[45px] 
        flex flex-center rounded-full bg-dark-1' onClick={icon.action}>
          {icon.icon}
        </span>
        ))
      }
    </div>
  )
}

export default List
