'use client'
import React, { useState } from 'react'
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
import { createUser } from '@/lib/actions/user.actions';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Loader from '@/components/general/Loader';
import RoleSelection from '@/components/general/RoleSelection';
import Link from 'next/link';

const registrationSchema = z.object({
  dateOfBirth: z.date().max(new Date(), 'Enter your date of birth').min(new Date(1960, 0, 1)),
  role: z.string().min(5, 'Please select your purpose on this app'),
  lastName: z.string().min(1, 'last name is required'),
  email: z.string().min(1, 'email is required'),
  password: z.string().min(1, 'password is required'),
  firstName: z.string().min(1, 'first name is required'),
  gender: z.enum(["male", "female", "other"])
});

type FormValues = z.infer<typeof registrationSchema>;


const RegisterAccount = () => {
  const [showRoleSelection, setShowRoleSelection] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});

  const initialValues: FormValues = {
    dateOfBirth: new Date(1990, 0, 1),
    role: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: 'other',
  };

  const [values, setValues] = useState<FormValues>(initialValues);

  const validateForm = (): boolean => {
    try {
      registrationSchema.parse(values);
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
      const newUser = await createUser(values);
      if(newUser){
        setShowRoleSelection(true)
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-green-3 min-h-screen w-full py-5 flex flex-center'>
      {
        showRoleSelection === false ? (
        <Card className={`relative w-[400px] border-none bg-white text-green-4`}>
          <CardHeader>
            <CardTitle>Account Registration</CardTitle>
            <CardDescription>Already have an account? <Link href={'/login'}>Login</Link></CardDescription>
          </CardHeader>
          <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor='firstName'>FirstName</Label>
                    <Input
                      required
                      id='firstName'
                      className="border-none bg-green-1 focus-visible:ring-0 focus-visible:ring-offset-0"
                      onChange={(e) => setValues({ ...values, firstName: e.target.value })}
                    />
                    {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor='lastName'>Lastname</Label>
                    <Input
                      required
                      id='lastName'
                      className="border-none bg-green-1 focus-visible:ring-0 focus-visible:ring-offset-0"
                      onChange={(e) => setValues({ ...values, lastName: e.target.value })}
                    />
                    {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
                  </div>
                </div>
                <div className="flex w-full flex-col gap-2.5">
                  <Label className="leading-[22.4px] text-green-4">
                    Select Date and Time
                  </Label>
                  <ReactDatePicker
                    required
                    maxDate={new Date(2020, 5, 13)}
                    minDate={new Date(2000, 0, 1)}
                    selected={values.dateOfBirth}
                    onChange={(date) => setValues({ ...values, dateOfBirth: date! })}
                    dateFormat="MMMM d, yyyy"
                    className="w-full rounded bg-green-1 p-2 focus:outline-none"
                  />
                  {errors.dateOfBirth && <span className="text-red-500">{errors.dateOfBirth}</span>}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="gender">Gender</Label>
                  <RadioGroup defaultValue="male" onValueChange={(value: "male" | "female" | "other") => setValues({ ...values, gender: value })}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="r1" />
                    <Label htmlFor="r1">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="r2" />
                    <Label htmlFor="r2">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="r3" />
                    <Label htmlFor="r3">Other</Label>
                  </div>
                </RadioGroup>
                  {errors.gender && <span className="text-red-500">{errors.gender}</span>}
                </div>

              </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              onClick={handleClick}
              className='w-full bg-green-2 text-green-1'
            >
              {loading ? <Loader /> : `Register`}
            </Button>
          </CardFooter>
        </Card>
        ): (
          <RoleSelection/>
        )
      }

    </div>
  );
}

export default RegisterAccount;
