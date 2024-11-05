"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { login } from '@/lib/actions/user.actions'
import { toast } from '@/components/ui/use-toast'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

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
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [values, setValues] = useState<FormValues>(initialValues);
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  const validateForm = (): boolean => {
    try {
      loginSchema.parse(values);
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const formattedErrors: Partial<Record<keyof FormValues, string>> = err.errors.reduce(
          (acc, curr) => {
            if (curr.path.length > 0 && typeof curr.path[0] === 'string') {
              acc[curr.path[0] as keyof FormValues] = curr.message;
            }
            return acc;
          },
          {} as Partial<Record<keyof FormValues, string>>
        );
        setErrors(formattedErrors);
      }
      return false;
    }
  };
  const handleClick = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const newUser = await login(values.email, values.password);
      toast({title: "Login successful"})
    } catch(error){
      toast({title: "Login failed"})
    };
  }
  return (
    <Card>
      <CardHeader>

      </CardHeader>
      <CardContent>
        <form>
          <div>
            <Label>Email</Label>
            <Input/>
          </div>
          <div>
            <Label>Password</Label>
            <Input/>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button>Login</Button>
      </CardFooter>
    </Card>
  )
}

export default Login