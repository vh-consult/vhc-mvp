'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'
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
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { toast } from '../ui/use-toast';
import { z } from 'zod';
import Loader from './Loader';

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
  const router = useRouter();
  const { user } = useUser();
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
      const userToUpdate = await createUser(values);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-green-3 min-h-screen w-full py-5 flex flex-center'>
      <Card className={`relative w-[400px] border-none bg-white text-green-4`}>
        <CardHeader>
          <CardTitle>Account Activation</CardTitle>
          <CardDescription>Fill the forms to activate your account</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid w-full items-center gap-4">
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
                <Label htmlFor='firstName'>firstName/Address</Label>
                <Input
                  required
                  id='firstName'
                  className="border-none bg-green-1 focus-visible:ring-0 focus-visible:ring-offset-0"
                  onChange={(e) => setValues({ ...values, firstName: e.target.value })}
                />
                {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="gender">Gender</Label>
                <Select required onValueChange={(value: "male" | "female" | "other") => setValues({ ...values, gender: value })}>
                  <SelectTrigger id="gender" className='bg-green-1'>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper" className='bg-green-1 text-green-4'>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
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
    </div>
  );
}

export default RegisterAccount;
