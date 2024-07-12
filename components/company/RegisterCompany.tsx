'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { useUser } from '@clerk/nextjs';
import { Textarea } from '../ui/textarea';
import { createCompany } from '@/lib/actions/company.actions';
import { toast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import Loader from '../general/Loader';
import useUserRole from '@/hooks/useUserRole';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const setupSchema = z.object({
  name: z.string().min(1, 'company\'s is required'),
  logo: z.any(),
  location: z.string().min(1, 'Location is required'),
  description: z.string().min(4, 'Please select gender').max(6),
  type: z.enum(["pharmacy", "hospital"])
});

type FormValues = z.infer<typeof setupSchema>;


const RegisterCompany = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const {userRole} =useUserRole()
  const [file, setFile] = useState<File>()
  const {user} = useUser()

  const initialValues: FormValues = {
    name: '',
    location: '',
    logo: file,
    description: '',
    type: userRole==="hospitalAdmin"? 'hospital': 'pharmacy' || ''
  };
  
  const [values, setValues] = useState<FormValues>(initialValues);
  
  const validateForm = (): boolean => {
    try {
      setupSchema.parse(values);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return;
    alert('i dey work')

    setLoading(true);
    try {
      const companyToCreate = await createCompany(
        user?.id as string, values)
        toast({title: 'Company registered successfully'})
        router.push(`/company/${companyToCreate._id}/home`)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-dark-2 min-h-screen w-full py-5 flex flex-center'>
    <Card className={`relative w-[400px] border-none bg-dark-1 text-green-1`}>
      <CardHeader>
        <CardTitle>Company Registration Form</CardTitle>
        <CardDescription>Fill the forms to register your company</CardDescription>
      </CardHeader>
      <CardContent>
      <div className="grid w-full items-center gap-4">
        <div className="">
          <Label>
            Upload company logo
          </Label>
          <Input
              type='file'
              placeholder='Upload company logo'
              name='logo'
              onChange={(e) => setFile(e.target.files?.[0])}
              accept='image/*'
              className='border-sky-1 bg-dark-3 '
            />
            {errors.logo && 
              <span className="text-red-500">
                {errors.logo}
              </span>
            }
        </div>
        <div className="">
        <Label className="text-sm font-normal leading-[22.4px] text-green-1">
          Company's Name
          </Label>
          <Input
            type='text'
            placeholder="Company's name"
            name='name'
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            className='border-none bg-dark-3 text-green-1'
          />
            {errors.logo && 
              <span className="text-red-500">
                {errors.logo}
              </span>
            }
        </div>
        <Input
          type='text'
          placeholder="Company's location"
          name='location'
          onChange={(e) => setValues({ ...values, location: e.target.value })}
          className='border-none bg-dark-3 text-green-1'

        />
        <Textarea
          placeholder='Add description'
          name='location'
          className='border-none bg-dark-3 text-green-1'
          onChange={(e) => setValues({ ...values, description: e.target.value })}
        />
        {
          userRole==="patient" || userRole==="doctor"? (
            <RadioGroup defaultValue="pharmacy" 
            onValueChange={(value) => setValues({
              ...values, type: value as "pharmacy"| "hospital"
            })}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pharmacy" id="pharmacy" />
                <Label htmlFor="pharmacy">Pharmacy</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hospital" id="hospital" />
                <Label htmlFor="hospital">Hospital</Label>
              </div>
            </RadioGroup>
          ): ''
        }
            </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={handleSubmit}
            className='w-full bg-green-2'
          >
          {loading? <Loader />: 'Register Company'}
          </Button>
        </CardFooter>
      </Card>
      </div>
  )
}

export default RegisterCompany
