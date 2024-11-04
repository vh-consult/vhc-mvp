"use client"
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { z } from 'zod';
  import { toast } from '../ui/use-toast';
  import { useRouter } from 'next/navigation';
  import Loader from './Loader';
import { roleSelection } from '@/lib/actions/user.actions'
  const roleSelectionSchema = z.object({
    role: z.enum(["patient", "doctor", "pharmacyAdmin"]),
    country: z.string().min(1, 'Please select your country'),
    location: z.string()
  });
  
  type FormValues = z.infer<typeof roleSelectionSchema>;

  const initialValues: FormValues = {
    role: 'patient',
    location: '',
    country: '',
  };

const RoleSelection = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

    const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
    const [values, setValues] = useState<FormValues>(initialValues)
    const validateForm = (): boolean => {
        try {
            roleSelectionSchema.parse(values);
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
          const userToUpdate = await roleSelection('id as string', values);
          switch (userToUpdate?.userRole) {
            case 'Patient':
            case 'Doctor':
              toast({title: 'Account created successfully, you are being redirected'})
              router.push('/landing');
              break;
            case 'PharmacyAdmin':
              toast({title: 'Account activated successfully, you have to set your company up next'})
              router.push('/company/set-up');
              break;
          }
        } finally {
          setLoading(false);
        }
      };
  return (
    <div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="country">Country</Label>
                <Select required onValueChange={(value) => setValues({ ...values, country: value })}>
                  <SelectTrigger id="country" className='bg-green-1'> 
                    <SelectValue placeholder="Select"  />
                  </SelectTrigger>
                  <SelectContent position="popper" className='bg-green-1 text-green-4'>
                    <SelectItem value="ghana">Ghana</SelectItem>
                    <SelectItem value="dubai">Dubai</SelectItem>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="france">France</SelectItem>
                  </SelectContent>
                </Select>
                {errors.country && <span className="text-red-500">{errors.country}</span>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="role">What are you?</Label>
                <Select required onValueChange={(value: "patient"|"doctor"|"pharmacyAdmin") => setValues({ ...values, role: value })}>
                  <SelectTrigger id="role" className='bg-green-1'>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper" className='bg-green-1 text-green-4'>
                    <SelectItem value="patient">Patient</SelectItem>
                    <SelectItem value="doctor">Doctor</SelectItem>
                    {/* <SelectItem value="hospitalAdmin">Hospital Admin</SelectItem> */}
                    <SelectItem value="pharmacyAdmin">Pharmacy Admin</SelectItem>
                  </SelectContent>
                </Select>
                {errors.role && <span className="text-red-500">{errors.role}</span>}
              </div>
    </div>
  )
}

export default RoleSelection