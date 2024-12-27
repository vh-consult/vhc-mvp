"use client"
import React, { useActionState, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { login } from '@/lib/actions/user.actions'
import { toast } from '@/components/ui/use-toast'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import SubmitButton from '@/components/general/SubmitButton'
import Link from 'next/link'




const Login = () => {
  const router = useRouter()
  const [state, loginAction] = useActionState(login, undefined)

  return (
    <Card className='w-[300px] p-5'>
      <CardHeader>
        <h1 className="text-2xl font-semibold">Sign In</h1>
        <p className="text-sm">New here? <Link href={'/register'} className='underline text-green-2'>Create Account</Link></p>
      </CardHeader>
      <CardContent>
        <form action={loginAction}>
          <div>
            <Label>Email</Label>
            <Input id='email' name='email'/>
            {state?.errors?.email && (<p className='text-red-500'>{state.errors.email}</p>)}
          </div>
          <div>
            <Label>Password</Label>
            <Input id='password' name='password' type='password'/>
            {state?.errors?.email && (<p className='text-red-500'>{state.errors.email}</p>)}
          </div>
          <SubmitButton buttonText='Login' className='bg-green-2'/>
        </form>
      </CardContent>
    </Card>
  )
}

export default Login