import Image from 'next/image'
import React from 'react'

const DeliveryInfoCard = () => {
  return (
    <div>
      <h2>Delivery</h2>
      <div className="">
        <div className="">
            <Image
                alt=''
                src={'/images/meet-up.jpg'}
                width={50}
                height={75}
                className=''
            />
        </div>
      </div>
    </div>
  )
}

export default DeliveryInfoCard
