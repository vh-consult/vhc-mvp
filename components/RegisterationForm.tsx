// 'use client'
// import React, { useState } from 'react'
// import { Input } from './ui/input'
// import ReactDatePicker from 'react-datepicker';
// import { Label } from "@/components/ui/label"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { updateUser } from '@/lib/actions/user.actions';
// import { useUser } from '@clerk/nextjs';
// import { Button } from './ui/button';
// import { useRouter } from 'next/navigation';
// import Loader from './Loader';
// import { toast } from './ui/use-toast';


// const RegisterationForm = () => {
//   const router = useRouter()
//   const {user} = useUser()
//   const [loading, setLoading] = useState<boolean>(false)

//   const initialValues = {
//     dateOfBirth: new Date(2020, 4, 15),
//     role: '',
//     location: '',
//     gender: '',
//     country: ''
//   };

//   const [values, setValues] = useState(initialValues);
//   const handleClick = async () => {
//     setLoading(true)
//     const userToUpdate = await updateUser(user?.id as string, values)
//     setLoading(false)
//     switch (userToUpdate.role) {
//       case "patient" || "doctor":
//         router.push("/user/landing")
//         break;
//       case "hospitalAdmin" || "pharmacyAdmin":
//         router.push("/company/set-up")
//         break;
//     }
//   };

  
//   return (
//     <div className='bg-dark-2 h-screen w-screen flex flex-center'>
//       <Card className={`relative w-[400px] ${loading? 'hidden': ''} border-none bg-dark-1 text-sky-2`}>
//         <CardHeader>
//           <CardTitle>Account Activation</CardTitle>
//           <CardDescription>Fill the forms to activate your account</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form>
//             <div className="grid w-full items-center gap-4">
//               <div className="flex w-full flex-col gap-2.5">
//                 <Label className="text-base font-normal leading-[22.4px] text-green-1">
//                   Select Date and Time
//                 </Label>
//                 <ReactDatePicker
//                   required
//                   maxDate={new Date(2020, 5, 13)}
//                   minDate={new Date(2000, 0, 1)}
//                   selected={values.dateOfBirth}
//                   onChange={(date) => setValues({ ...values, dateOfBirth: date! })}
//                   dateFormat="MMMM d, yyyy"
//                   className="w-full rounded bg-dark-3 p-2 focus:outline-none"
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="country">Country</Label>
//                 <Select required onValueChange={(value) => setValues({ ...values, country: value })}>
//                   <SelectTrigger id="country">
//                     <SelectValue placeholder="Select" />
//                   </SelectTrigger>
//                   <SelectContent position="popper" className='bg-dark-3  text-sky-2'>
//                     <SelectItem value="ghana">Ghana</SelectItem>
//                     <SelectItem value="dubai">Dubai</SelectItem>
//                     <SelectItem value="usa">USA</SelectItem>
//                     <SelectItem value="canada">Canasa</SelectItem>
//                     <SelectItem value="france">France</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor='location'>Location/Address</Label>
//                 <Input
//                   required
//                   id='location'
//                   className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
//                   onChange={(e) => setValues({ ...values, location: e.target.value })}
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="gender">Gender</Label>
//                 <Select required onValueChange={(value) => setValues({ ...values, gender: value })}>
//                   <SelectTrigger id="gender">
//                     <SelectValue placeholder="Select" />
//                   </SelectTrigger>
//                   <SelectContent position="popper" className='bg-dark-3  text-sky-2'>
//                     <SelectItem value="male">Male</SelectItem>
//                     <SelectItem value="female">Female</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="role">What are you?</Label>
//                 <Select required onValueChange={(value) => setValues({ ...values, role: value })}>
//                   <SelectTrigger id="role">
//                     <SelectValue placeholder="Select" />
//                   </SelectTrigger>
//                   <SelectContent position="popper" className='bg-dark-3 text-sky-2'>
//                     <SelectItem value="patient">Patient</SelectItem>
//                     <SelectItem value="doctor">Doctor</SelectItem>
//                     <SelectItem value="hospitalAdmin">Hospital Admin</SelectItem>
//                     <SelectItem value="pharmacyAdmin">Pharmacy Admin</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//           </form>
//         </CardContent>
//         <CardFooter className="flex justify-between">
//           <Button
//             onClick={handleClick}
//             className='w-full bg-green-2'
//           >
//             Activate
//           </Button>
//         </CardFooter>
//       </Card>
//       {loading && <Loader/>}
//     </div>
//   );
// }

// export default RegisterationForm;

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
import { updateUser } from '@/lib/actions/user.actions';
import { useUser } from '@clerk/nextjs';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import Loader from './Loader';
import { toast } from './ui/use-toast';
import { z } from 'zod';

// Define Zod schema
const registrationSchema = z.object({
  dateOfBirth: z.date().max(new Date(), 'Enter your date of birth').min(new Date(1960, 0, 1)),
  role: z.string().min(5, 'Please select your purpose on this app'),
  location: z.string().min(1, 'Location is required'),
  gender: z.string().min(4, 'Please select gender').max(6),
  country: z.string().min(1, 'Please select your country'),
});

// Define type for form values
type FormValues = z.infer<typeof registrationSchema>;

const RegisterationForm = () => {
  const router = useRouter();
  const { user } = useUser();
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});

  const initialValues: FormValues = {
    dateOfBirth: new Date(1960, 0, 1),
    role: '',
    location: '',
    gender: '',
    country: '',
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
      const userToUpdate = await updateUser(user?.id as string, values);
      switch (userToUpdate.role) {
        case 'patient':
        case 'doctor':
          router.push('/user/landing');
          break;
        case 'hospitalAdmin':
        case 'pharmacyAdmin':
          router.push('/company/set-up');
          break;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-dark-2 min-h-screen w-full py-5 flex flex-center'>
      <Card className={`relative w-[400px] ${loading ? 'hidden' : ''} border-none bg-dark-1 text-sky-2`}>
        <CardHeader>
          <CardTitle>Account Activation</CardTitle>
          <CardDescription>Fill the forms to activate your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex w-full flex-col gap-2.5">
                <Label className="text-base font-normal leading-[22.4px] text-green-1">
                  Select Date and Time
                </Label>
                <ReactDatePicker
                  required
                  maxDate={new Date(2020, 5, 13)}
                  minDate={new Date(2000, 0, 1)}
                  selected={values.dateOfBirth}
                  onChange={(date) => setValues({ ...values, dateOfBirth: date! })}
                  dateFormat="MMMM d, yyyy"
                  className="w-full rounded bg-dark-3 p-2 focus:outline-none"
                />
                {errors.dateOfBirth && <span className="text-red-500">{errors.dateOfBirth}</span>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="country">Country</Label>
                <Select required onValueChange={(value) => setValues({ ...values, country: value })}>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper" className='bg-dark-3 text-sky-2'>
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
                <Label htmlFor='location'>Location/Address</Label>
                <Input
                  required
                  id='location'
                  className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                  onChange={(e) => setValues({ ...values, location: e.target.value })}
                />
                {errors.location && <span className="text-red-500">{errors.location}</span>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="gender">Gender</Label>
                <Select required onValueChange={(value) => setValues({ ...values, gender: value })}>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper" className='bg-dark-3 text-sky-2'>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && <span className="text-red-500">{errors.gender}</span>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="role">What are you?</Label>
                <Select required onValueChange={(value) => setValues({ ...values, role: value })}>
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
                {errors.role && <span className="text-red-500">{errors.role}</span>}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={handleClick}
            className='w-full bg-green-2'
          >
            Activate
          </Button>
        </CardFooter>
      </Card>
      {loading && <Loader />}
    </div>
  );
}

export default RegisterationForm;
