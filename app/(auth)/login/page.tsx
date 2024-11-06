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

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

type FormValues = z.infer<typeof loginSchema>

const initialValues: FormValues = {
  email: '',
  password: ''
}

const Login = () => {
  const router = useRouter()
  const [state, loginAction] = useActionState(login, undefined)

  return (
    <Card className='w-[300px] p-5'>
      <CardHeader>

      </CardHeader>
      <CardContent>
        <form action={loginAction}>
          <div>
            <Label>Email</Label>
            <Input/>
          </div>
          <div>
            <Label>Password</Label>
            <Input/>
          </div>
          <SubmitButton buttonText='Login' className='bg-green-2'/>
        </form>
      </CardContent>
    </Card>
  )
}

export default Login