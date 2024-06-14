import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const DeliveryInfoCard = () => {
  return (
    <main className='bg-dark-1 w-[340px] h-[200px] rounded-lg p-2'>
      <h2 className='text-xl font-semibold'>
        Delivery
      </h2>
      <div className="w-full flex flex-between">
        <div className="w-full flex items-center">
            <Image
                alt=''
                src={'/images/meet-up.jpg'}
                width={50}
                height={85}
                className='rounded-md w-[55px] mr-2 h-[60px] object-cover'
            />
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold">
                    Flip Delivery
                </h3>
                <p className="text-sm">
                    Monday - Friday
                </p>
            </div>
        </div>
        <span className="">
            $10.50
        </span>
      </div>
      <div className="w-full flex flex-col">
        <Button className='bg-dark-2 text-sm mt-2 mb-1 hover:bg-dark-4'>
            View Delivery Details
        </Button>
        <Button variant={'outline'} className='text-bg-dark-2 text-sm hover:bg-dark-4 border-2 border-dark-4'>
            Change Delivery Service
        </Button>
      </div>
    </main>
  )
}

export default DeliveryInfoCard
