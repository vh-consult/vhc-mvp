"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button';

const data = [
  {
    imageUrl: '/images/doc-1.jpg',
    name: 'Patience Adjolo',
    age: 32,
    status: 'Healthy',
    gender: 'Male'
  },
]

interface ClientCardProps {
  name: string;
  imageUrl: string;
  age: number;
  gender: "Male" | "Female",
  status: "Healthy" | "Recovering" | "Sick"
}

const ClientCard = ({
  name, imageUrl, age,
  status, gender
}: ClientCardProps) => {
    return (
      <div className='w-full h-10 text-sm bg-dark-1 text-green-1 flex flex-row flex-between px-4'>
          <Image
            src={imageUrl}
            alt='client pic'
            width={30}
            height={30}
            className='rounded-full mr-4'
          />
          <div className="w-[80%] grid grid-cols-4 items-center text-center ">
            <span>
              {name}
            </span>
            <span>
              {gender}
            </span>
            <span>
              {age}
            </span>
            <span>
              {status}
            </span>
          </div>
        <Button className='border-2 border-dark-3 w-12 text-sm h-7'>
          view
        </Button>
      </div>
    )
  }
  
const Header = () => {
  return(
    <div className='w-full h-10 text-sm bg-dark-1 text-green-1 flex flex-row flex-between px-4'>
    <span className="w-[30px] h-full "></span>
    <div className="w-[85%] grid grid-cols-4 items-center text-center ">
      <span>
        Name
      </span>
      <span>
        Gender
      </span>
      <span>
        Age
      </span>
      <span>
        Status
      </span>
    </div>
  <span className="w-12 h-full">...</span>
</div>
  )
}

const ClientList = () => {
  return (
    <div className='w-[600px]'>
      <Header/>
      <div className="w-full flex flex-col">
        {
          data.map((client, index) => (
            <ClientCard
              key={index}
              age={client.age}
              gender={client.gender as "Male" | "Female"}
              name={client.name}
              imageUrl={client.imageUrl}
              status={client.status as "Healthy"|"Sick"|"Recovering"
              }
            />
          ))
        }
      </div>
    </div>
  )
}

export default ClientList
