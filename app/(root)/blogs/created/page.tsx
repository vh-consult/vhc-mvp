import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const CreatedBlogsPage = () => {
  return (
    <div>
      <Link href={'/blogs/create-post'}>
        <Button className='bg-green-2'>Create Blog</Button>
      </Link>
    </div>
  )
}

export default CreatedBlogsPage
