import AffiliateDoctor from '@/components/user/AffiliateDoctor'
import AffiliateHospital from '@/components/user/AffiliateHospital'
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
