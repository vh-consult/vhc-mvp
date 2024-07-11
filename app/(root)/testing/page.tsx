"use client"
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import React from 'react'

const page = () => {
  const handleClick = () => {
    toast({title: 'yo'})
  }
  return (
    <div>
      <Button onClick={handleClick}>Add to inventory</Button>
    </div>
  )
}

export default page
