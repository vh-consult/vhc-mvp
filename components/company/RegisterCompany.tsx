'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { createCompany } from '@/lib/actions/company.actions';
import { toast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
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
import Loader from '../general/Loader';
import { useEdgeStore } from '@/lib/edgestore';
import { Toast } from '../ui/toast';
import { SingleImageDropzone } from '../general/SingleImageDropzone';
import Cookies from "js-cookie"

  const setupSchema = z.object({
    name: z.string().min(1, 'company\'s name is required'),
    logo: z.string(),
    location: z.string().min(1, 'Location is required'),
    description: z.string().min(4, 'Please type something about your company'),
    type: z.enum(["pharmacy", "hospital", ""])
  });

type FormValues = z.infer<typeof setupSchema>;


const RegisterCompany = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const user = JSON.parse(Cookies.get("user") || '{}');
  const [file, setFile] = useState<File>()
  const initialValues: FormValues = {
    name: '',
    location: '',
    description: '',
    type: '',
    logo: ''
  };
  const {edgestore} = useEdgeStore()
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
  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      let logoUrl
      if (file) {
        const res = await edgestore.myPublicImages.upload({file})
        logoUrl = res.url
      }
      
      switch (user.role) {
        case "PharmacyAdmin":
          values.type = "pharmacy"
          break;
        case "HospitalAdmin":
          values.type = "hospital"
          break;
        default:
          break;
      }
      console.log(values.type)
      const companyToCreate = await createCompany(
        user?.id as string, { ...values, logo: logoUrl }
      )

      toast({title: 'Company registered successfully'})
      router.push(`/company/${companyToCreate._id}/about`)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-full w-full py-5 flex flex-center'>
    <Card className={`relative w-[600px] border-none bg-white text-dark`}>
      <CardHeader>
        <CardTitle>Company Registration Form</CardTitle>
        <CardDescription>Fill the forms to register your company</CardDescription>
      </CardHeader>
      <CardContent>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col">
          <Label className='mb-2'>
            Upload company logo
          </Label>
          <SingleImageDropzone
          width={150}
          height={150}
          value={file}
          onChange={(file) => {
            setFile(file);
          }}
          className='mx-auto'
        />
        </div>
        <div className="flex flex-col">
          <Label className='mb-2'>
            Company&apos;s Name
          </Label>
          <Input
            type='text'
            name='name'
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            className='bg-secondary text-dark'
          />
            {errors.name && 
              <span className="text-red-500">
                {errors.name}
              </span>
            }
        </div>
        <div className="flex flex-col">
          <Label className='mb-2'>
          Company&apos;s location
          </Label>
          <Input
            type='text'
            name='location'
            onChange={(e) => setValues({ ...values, location: e.target.value })}
            className='bg-secondary text-dark'
          />
          {errors.location && 
            <span className="text-red-500">
              {errors.location}
            </span>
          }
        </div>
        <div className="flex flex-col">
          <Label className='mb-2'>
            About Company
          </Label>
          <Textarea
            placeholder=''
            name='description'
            className=' bg-secondary text-dark'
            onChange={(e) => setValues({ ...values, description: e.target.value })}
          />
          {errors.description && 
            <span className="text-red-500">
              {errors.description}
            </span>
          }
        </div>
          {
            user.role==="Patient" || user.role==="Doctor"? (
              <div className="w-[80%] flex flex-row flex-between">
              <Label>Select Company Type</Label>
              <RadioGroup defaultValue="pharmacy" 
              className='flex w-[50%] flex-between'
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
          {errors.type && 
            <span className="text-red-500">
              {errors.type}
            </span>
          }
        </div>
            ): ''
          }
            </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={handleSubmit}
            className='w-full bg-accent text-secondary'
          >
          {loading? <Loader />: 'Register Company'}
          </Button>
        </CardFooter>
      </Card>
      </div>
  )
}

export default RegisterCompany
