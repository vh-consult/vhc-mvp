import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='w-full h-screen bg-dark-2 text-sky-1  flex flex-col flex-center'>
      <Image 
        src='/logo.svg'
        alt=''
        width={50}
        height={50}
        className='w-full h-full'
      />
      <div className='font-bold text-2xl my-10'>
        Page Not found please
      </div>
      <Link href={'/'} className='text-sm text-blue-1 underline'>  Return back to homepage </Link>
    </div>
  )
}

export default NotFoundPage
