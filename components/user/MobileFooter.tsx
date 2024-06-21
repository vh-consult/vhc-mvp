import { usePathname } from 'next/navigation'
import React from 'react'

const MobileFooter = () => {
  const pathname = usePathname()
  
  return (
    <div className='h-[40px] w-full  md:hidden'>
      
    </div>
  )
}

export default MobileFooter
