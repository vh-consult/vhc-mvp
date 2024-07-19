"use client"
import React, { useState } from 'react'
import { useFormStatus } from 'react-dom' 
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const SubmitButton = ({
    className,
    buttonText,
    buttonIcon,
    handleClick,
}: {
    className: string,
    buttonText: string,
    buttonIcon?: string,
    handleClick?: () => void
}) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type='submit'
      onClick={handleClick}
      disabled={pending}
      className={cn
        ('disabled:opacity-60 transition ', 
          className)
      }
    >
      {buttonIcon && (
          <Image src={buttonIcon} alt='icon' width={13} height={13} />
      )} &nbsp;
      {buttonText || 'Done'}    
    </Button>
  )
}


export default SubmitButton
