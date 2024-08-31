import AffiliateDoctor from '@/components/patient/AffiliateDoctor'
import AffiliateHospital from '@/components/patient/AffiliateHospital'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full flex flex-col gap-y-4'>
      <AffiliateHospital/>
      <AffiliateDoctor/>
    </div>
  )
}

export default page
