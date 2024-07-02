"use client"
import React from 'react'
import { useFormStatus } from 'react-dom' 
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const SubmitButton = ({
    className,
    buttonText
}: {
    className: string,
    buttonText: string
}) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type='submit'
      disabled={pending}
      className={cn('disabled:opacity-60 transition', className)}
    >
      {buttonText}
    </Button>
  )
}

export default SubmitButton
