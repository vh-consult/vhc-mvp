'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { 
  Select, SelectContent, 
  SelectItem, SelectTrigger, SelectValue 
} from '../ui/select';
import { useUser } from '@clerk/nextjs';
import { Textarea } from '../ui/textarea';
import { CompanyProps, createCompany } from '@/lib/actions/company.actions';
import { toast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

// Define Zod schema
const setupSchema = z.object({
  name: z.string().min(1, 'Location is required'),
  role: z.string().min(5, 'Please select your purpose on this app'),
  location: z.string().min(1, 'Location is required'),
  description: z.string().min(4, 'Please select gender').max(6),
  specialties: z.string().min(1, 'Please select your country'),
});

// Define type for form values
type FormValues = z.infer<typeof setupSchema>;


const RegisterCompany =  () => {
  const router = useRouter();
  const { user } = useUser();
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});

  const initialValues: FormValues = {
    name: '',
    role: '',
    location: '',
    description: '',
    specialties: '',
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

  // const handleClick = async () => {
  //   if (!validateForm()) return;

  //   setLoading(true);
  //   try {
  //     const userToUpdate = await createCompany(user?.id as string, values);
  //     switch (userToUpdate.role) {
  //       case 'patient':
  //       case 'doctor':
  //         toast({title: 'Account activated successfully, you are being redirected'})
  //         router.push('/user/landing');
  //         break;
  //       case 'hospitalAdmin':
  //       case 'pharmacyAdmin':
  //         toast({title: 'Account activated successfully, you have to set your company up next'})
  //         router.push('/company/set-up');
  //         break;
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <form
      className='p-3 w-[500px] flex flex-col gap-5 h-[450px] bg-dark-1 text-green-1'
    >
      <h1 className="text-2xl font-semibold">Company Registration Form</h1>
      <Input
        type='file'
        placeholder='Upload company logo'
        name='image'
        className='border-sky-1 bg-dark-3 '
      />
      <Input
        type='text'
        placeholder="Company's name"
        name='name'
        className='border-none bg-dark-3 text-green-1'

      />
      <Input
        type='text'
        placeholder="Company's location"
        name='location'
        className='border-none bg-dark-3 text-green-1'

      />
      <Textarea
        placeholder='Add description'
        name='location'
        className='border-none bg-dark-3 text-green-1'

      />
        <Select name="type">
        <SelectTrigger id="companyType">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent position="popper" className='bg-dark-3  text-green-1'>
          <SelectItem  value="pharmacy">Pharmacy</SelectItem>
          <SelectItem value="hospital">Hospital</SelectItem>
        </SelectContent>
      </Select>

    </form>
  )
}

export default RegisterCompany

// "use client"

// import React, { useEffect, useState } from 'react'
// import { Input } from '../ui/input';
// import SubmitButton from '../SubmitButton';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
// import { currentUser } from '@clerk/nextjs/server'
// import { getUserById } from '@/lib/actions/user.actions';
// import { Textarea } from '../ui/textarea';
// import { CompanyProps, createCompany } from '@/lib/actions/company.actions';
// import { toast } from '../ui/use-toast';
// import { useRouter } from 'next/navigation';

// const RegisterCompany = () => {
//   const [userRole, setUserRole] = useState('');
//   const [companyData, setCompanyData] = useState<CompanyProps>({
//     name: '',
//     location: '',
//     image: '',
//     type: 'pharmacy'
//   });

//   const router = useRouter();

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       const user = await currentUser();
//       if (!user) {
//         throw new Error('User not logged in')
//       }
//       const userFromDB = await getUserById(user.id);
//       setUserRole(userFromDB.role);
//     }
//     fetchUserRole();
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const formData = new FormData(e.target as HTMLFormElement);
//     let newCompanyData: CompanyProps = {
//       name: formData.get('name') as string,
//       location: formData.get('location') as string,
//       image: formData.get('image') as string,
//       type: formData.get('type') as 'pharmacy' | 'hospital'
//     };

//     if (userRole === 'hospitalAdmin') {
//       newCompanyData.type = 'hospital';
//     } else if (userRole === 'pharmacyAdmin') {
//       newCompanyData.type = 'pharmacy';
//     }

//     const user = await currentUser();
//     const company = await createCompany(user?.id as string, newCompanyData);

//     toast({ title: 'Company setup successful' });
//     router.push(`/company/${company?.id}/home`);
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className='p-3 w-[500px] flex flex-col gap-5 h-[450px] bg-dark-1 text-green-1'
//     >
//       <h1 className="text-2xl font-semibold">Company Registration Form</h1>
//       <Input
//         type='file'
//         placeholder='Upload company logo'
//         name='image'
//         className='border-sky-1 bg-dark-3'
//       />
//       <Input
//         type='text'
//         placeholder="Company's name"
//         name='name'
//         className='border-none bg-dark-3 text-green-1'
//       />
//       <Input
//         type='text'
//         placeholder="Company's location"
//         name='location'
//         className='border-none bg-dark-3 text-green-1'
//       />
//       <Textarea
//         placeholder='Add description'
//         name='description'
//         className='border-none bg-dark-3 text-green-1'
//       />
//       {(userRole === 'patient' || userRole === 'doctor') && (
//         <Select name="type">
//           <SelectTrigger id="companyType">
//             <SelectValue placeholder="Select" />
//           </SelectTrigger>
//           <SelectContent position="popper" className='bg-dark-3 text-green-1'>
//             <SelectItem value="pharmacy">Pharmacy</SelectItem>
//             <SelectItem value="hospital">Hospital</SelectItem>
//           </SelectContent>
//         </Select>
//       )}
//       <SubmitButton
//         className='bg-green-2 text-white w-full'
//         buttonText='Create Company'
//       />
//     </form>
//   )
// }

// export default RegisterCompany
