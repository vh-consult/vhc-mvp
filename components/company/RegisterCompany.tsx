'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { useUser } from '@clerk/nextjs';
import { Textarea } from '../ui/textarea';
import { createCompany } from '@/lib/actions/company.actions';
import { toast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import Loader from '../Loader';
import useUserRole from '@/hooks/useUserRole';
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import {CldUploadWidget} from "next-cloudinary"
// Define Zod schema
const setupSchema = z.object({
  name: z.string().min(1, 'company\'s is required'),
  logo: z.any(),
  location: z.string().min(1, 'Location is required'),
  description: z.string().min(4, 'Please select gender').max(6),
  type: z.enum(["pharmacy", "hospital"])
});

// Define type for form values
type FormValues = z.infer<typeof setupSchema>;


const RegisterCompany =  () => {
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
    <form
      className='p-3 w-[500px] flex flex-col gap-5 h-[450px] bg-dark-1 text-green-1'
    >
      <h1 className="text-2xl font-semibold">Company Registration Form</h1>
      <Input
        type='file'
        placeholder='Upload company logo'
        name='image'
        onChange={(e) => setFile(e.target.files?.[0])}
        accept='image/*'
        className='border-sky-1 bg-dark-3 '
      />
      <CldUploadWidget signatureEndpoint="/api/sign-image">
      {
        ({open}) => {
          return(
            <Button 
              className=""
              onClick={()=> open()}
            >
              Upload company logo
            </Button>
          )
        }
      }
      </CldUploadWidget>
      {errors.logo && <span className="text-red-500">{errors.logo}</span>}
      <Input
        type='text'
        placeholder="Company's name"
        name='name'
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        className='border-none bg-dark-3 text-green-1'

      />
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
      <Button onClick={handleSubmit} className='w-full bg-green-2 text-green-1'>
        Register Company
      </Button>
      {loading && <Loader />}
    </form>
  )
}

export default RegisterCompany
