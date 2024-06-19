"use client"
import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Loader from './Loader'
import { useUser } from '@clerk/nextjs'
import { subscribeToNewsletter } from '@/lib/actions/user.actions'
import { toast } from './ui/use-toast'

const NewsLetterSubscription = () => {
    const {user} = useUser()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const subscribeTONewsletter = async () =>{
        try{
            setIsLoading(true)
            const response = await subscribeToNewsletter(user?.id as string)
            toast({title: response?.message})
        } finally{
            setIsLoading(false)
        }
    }
  return (
    <div className='w-full bg-dark-1 px-2 py-3 rounded-xl'>
      <h2 className='text-xl font-medium leading-[24px]'>
        Subscribe to our newslettter for exclusive updates and insights
      </h2>
      <p className="text-base leading-[20px]">
        Unlock a world of valuable information by
        subscribing to our newsletter today! Stay ahead
        of the curve with access to exclusive updates,
        expert insights, and actionable tips devlivered straight to your inbox.
      </p>
      <div className="flex items-center my-3 pl-2 border-none rounded-lg  bg-dark-3">
        <AiOutlineMail className='w-[24px] h-[24px]'/>
        <Input
          placeholder='Enter email address'
          className='border-none '
        />
      </div>
      <Button
        className='w-full h-[40px] rounded-lg bg-green-2'
        onClick={subscribeTONewsletter}
      >
        {isLoading? <Loader/> : 'Subscribe'}
      </Button>
    </div>
  )
}

export default NewsLetterSubscription
