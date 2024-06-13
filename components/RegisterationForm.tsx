'use client'
import React, { useState } from 'react'
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
import SubmitButton from './SubmitButton';
import { revalidatePath } from 'next/cache';
import { updateUser } from '@/lib/actions/user.actions';
import { useUser } from '@clerk/nextjs';


const RegisterationForm = () => {
  const initialValues = {
    dateOfBirth: new Date(),
    role: '',
    location: '',
    gender: '',
    country: ''
  };
  const [values, setValues] = useState(initialValues);
  
  const handleClick = async () => {
    const {user} = useUser()
    console.log(user, values)
    await updateUser(user?.id as string, values)
    revalidatePath("/user/landing")
  };

  
  return (
    <div className='bg-dark-2 h-screen w-screen flex flex-center'>
      <Card className="w-[400px] border-none bg-dark-1 text-sky-2">
        <CardHeader>
          <CardTitle>Account Activation</CardTitle>
          <CardDescription>Fill the forms to activate your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={handleClick}
          >
            <div className="grid w-full items-center gap-4">
              <div className="flex w-full flex-col gap-2.5">
                <Label className="text-base font-normal leading-[22.4px] text-green-1">
                  Select Date and Time
                </Label>
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
          <SubmitButton buttonText='Activate' className='w-full bg-green-2'/>
        </CardFooter>
      </Card>
    </div>
  );
}

export default RegisterationForm;
