import Image from 'next/image'
import React from 'react'

const AffiliateHospital = () => {
  return (
    <div className="h-[260px] w-full bg-dark-1 rounded-lg p-4">
      <div className=" h-full bg-dark-1">
        <Image 
            src={'/images/hosp-1.jpg'}
            alt='hospital-image'
            width={200}
            height={200}
            className='object-cover'
        />
        <h1 className="text-xl font-medium">Serwise Hospital LLC</h1>
      </div>
    </div>
  )
}

export default AffiliateHospital
