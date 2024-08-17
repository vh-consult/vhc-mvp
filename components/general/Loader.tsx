import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex flex-center w-full h-full '>
      <Image
        src='/icons/loading-circle.svg'
        alt='Loading'
        width={30}
        height={30}

      />
    </div>
  )
}

export default Loader
