"use client"
import React, { FormEvent, useState } from 'react'
import { Input } from './ui/input'
import ReactDatePicker from 'react-datepicker';
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from './ui/button';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';
import { toast } from './ui/use-toast';
import { useRouter } from 'next/navigation';

interface ApiResponse {
  success: boolean;
  message: string;
  
}

const RegisterationForm = () => {
  const { user } = useUser();
  const router = useRouter();

  const initialValues = {
    dateOfBirth: new Date(),
    role: '',
    location: '',
    gender: '',
    country: ''
  };
  const [values, setValues] = useState(initialValues);
  
  const handleClick = async (e: FormEvent) => {
    const formData = {
      dateOfBirth: values.dateOfBirth,
      clerkId: user?.id,
      country: values.country,
      gender: values.gender,
      role: values.role,
      location: values.location
    }
      const response = await fetch('/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data: ApiResponse = await response.json()
      console.log(response.json())
      toast({
        title: data.message
      })
      if (data.success === true) {
        router.push('/user/landing')
      } else {
        router.push('/user/activate-account')
      }
  };

  return (
    <div className='bg-dark-2 h-screen w-screen flex flex-center'>
      <Card className="w-[400px] border-none bg-dark-1 text-sky-2">
        <CardHeader>
          <CardTitle>Account Activation</CardTitle>
          <CardDescription>Fill the forms to activate your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex w-full flex-col gap-2.5">
                <label className="text-base font-normal leading-[22.4px] text-green-1">
                  Select Date and Time
                </label>
                <ReactDatePicker
                  selected={values.dateOfBirth}
                  onChange={(date) => setValues({ ...values, dateOfBirth: date! })}
                  dateFormat="MMMM d, yyyy"
                  className="w-full rounded bg-dark-3 p-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="country">Country</Label>
                <Select onValueChange={(value) => setValues({ ...values, country: value })}>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper" className='bg-dark-3  text-sky-2'>
                    <SelectItem value="ghana">Ghana</SelectItem>
                    <SelectItem value="dubai">Dubai</SelectItem>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="canada">Canasa</SelectItem>
                    <SelectItem value="france">France</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor='location'>Location/Address</Label>
                <Input
                  id='location'
                  className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                  onChange={(e) => setValues({ ...values, location: e.target.value })}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="gender">Gender</Label>
                <Select onValueChange={(value) => setValues({ ...values, gender: value })}>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper" className='bg-dark-3  text-sky-2'>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="role">What are you?</Label>
                <Select onValueChange={(value) => setValues({ ...values, role: value })}>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper" className='bg-dark-3 text-sky-2'>
                    <SelectItem value="patient">Patient</SelectItem>
                    <SelectItem value="doctor">Doctor</SelectItem>
                    <SelectItem value="hospitalAdmin">Hospital Admin</SelectItem>
                    <SelectItem value="pharmacyAdmin">Pharmacy Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handleClick} className='bg-green-2 w-full'>Activate</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default RegisterationForm;
