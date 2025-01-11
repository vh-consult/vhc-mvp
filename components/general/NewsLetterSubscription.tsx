"use client"
import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Loader from '../general/Loader'
import { subscribeToNewsletter } from '@/lib/actions/user.actions'
import { toast } from '../ui/use-toast'
import Cookies from "js-cookie"

const NewsLetterSubscription = () => {
  const user = JSON.parse(Cookies.get("user") || '{}');
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const subscribeTONewsletter = async () =>{
        try{
            setIsLoading(true)
            const response = await subscribeToNewsletter(user?.id as string)
            toast({title: response?.message})
        } catch{
          toast({title: 'failed to add you to newsletter'})
        } 
        finally{
            setIsLoading(false)
        }
    }
  return (
    <div className='w-full bg-white px-2 py-3 mb-6 rounded-xl'>
      <h2 className='text-xl font-medium leading-[24px]'>
      Subscribe to our newsletter today!      </h2>
      <p className="text-base my-2">
        Stay ahead
        of the curve with access to exclusive updates,
        expert insights, and actionable tips devlivered straight to your inbox.
      </p>
      <div className="flex items-center my-3 pl-2 border-none rounded-lg  bg-secondary">
        <AiOutlineMail className='w-[24px] h-[24px]'/>
        <Input
          placeholder='Enter email address'
          className='border bg-secondary focus-visible:ring-0 outline-none '
        />
      </div>
      <Button
        className='w-full h-[40px] rounded-lg bg-accent text-secondary'
        onClick={subscribeTONewsletter}
      >
        {isLoading? <Loader/> : 'Subscribe'}
      </Button>
    </div>
  )
}

export default NewsLetterSubscription
