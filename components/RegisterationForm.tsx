"use client"
import React, { FormEvent, ReactNode, useState } from 'react'
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
import { User } from '@clerk/nextjs/server';
import { useUser } from '@clerk/nextjs';

const initialValues = {
    dateOfBirth: new Date(),
    role: '',
    location: '',
    gender: '',
    country: ''
  };

const RegisterationForm = () => {
  const { isLoaded, user } = useUser();
    const [formState, setFormState] = useState<boolean>(true)
    const [values, setValues] = useState(initialValues);
    const handleClick = (e: FormEvent) => {
      e.preventDefault()
      const url = `http://localhost:3001/user/${user?.id}/edit`
      const data = values
      const config = {
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN', 
        }
      };
      axios.put(url, data, config)
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
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
                <Label htmlFor='' >
                  Location/Address
                </Label>
                <Input
                  id=''
                  className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                  onChange={(e) =>
                    setValues({ ...values, location: e.target.value })
                  }
                />
                <div className="flex flex-col space-y-1.5">
                <Label htmlFor="gender">Gender</Label>
                <Select>
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
                <Select>
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
          <Button onClick={handleClick} className='bg-green-2 w-full'>Proceed</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default RegisterationForm


// "use client"
// import React, { useState } from 'react';
// import { Input } from './ui/input';
// import ReactDatePicker from 'react-datepicker';
// import { Label } from "@/components/ui/label";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from './ui/button';

// const initialValues = {
//   dateOfBirth: new Date(),
//   role: '',
//   location: '',
//   gender: '',
//   country: ''
// };

// const RegisterationForm = () => {
//   const [formState, setFormState] = useState<boolean>(true);
//   const [values, setValues] = useState(initialValues);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const getCurrentLocation = () => {
//     if (navigator.geolocation) {
//       setLoading(true);
//       setError('');
//       navigator.geolocation.getCurrentPosition(async (position) => {
//         const { latitude, longitude } = position.coords;
//         const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your actual API key
//         try {
//           const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`);
//           const data = await response.json();
//           console.log(data); // Log the API response for debugging
//           if (data.results && data.results[0]) {
//             setValues({ ...values, location: data.results[0].formatted_address });
//           } else {
//             setError('Unable to retrieve address. Please try again.');
//           }
//         } catch (err) {
//           setError('An error occurred while retrieving the address. Please try again.');
//         } finally {
//           setLoading(false);
//         }
//       }, (error) => {
//         setLoading(false);
//         setError('Error getting location. Please try again.');
//         console.error('Error getting location', error);
//       });
//     } else {
//       setError('Geolocation is not supported by this browser.');
//     }
//   };

//   return (
//     <div className='bg-dark-2 h-screen w-screen flex flex-center'>
//       <Card className="w-[400px] border-none bg-dark-1 text-sky-2">
//         <CardHeader>
//           <CardTitle>Account Activation</CardTitle>
//           <CardDescription>Fill the forms to activate your account</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form>
//             <div className="grid w-full items-center gap-4">
//               <div className="flex w-full flex-col gap-2.5">
//                 <label className="text-base font-normal leading-[22.4px] text-green-1">
//                   Select Date and Time
//                 </label>
//                 <ReactDatePicker
//                   selected={values.dateOfBirth}
//                   onChange={(date) => setValues({ ...values, dateOfBirth: date! })}
//                   dateFormat="MMMM d, yyyy"
//                   className="w-full rounded bg-dark-3 p-2 focus:outline-none"
//                 />
//               </div>
//               <Label htmlFor='location'>
//                 Location/Address
//               </Label>
//               <div className="relative">
//                 <Input
//                   id='location'
//                   value={values.location}
//                   className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0 pl-10"
//                   onChange={(e) => setValues({ ...values, location: e.target.value })}
//                 />
//                 <button
//                   type="button"
//                   className="absolute left-2 top-2 text-white"
//                   onClick={getCurrentLocation}
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.05 11.293a7 7 0 0111.32-3.708l2.813-2.812a1 1 0 011.415 1.415l-2.812 2.813A7 7 0 115.05 11.293z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10h7v7m0 0l-3.5-3.5M13 10l3.5 3.5" />
//                   </svg>
//                 </button>
//                 {loading && <div className="absolute right-2 top-2 text-white">Loading...</div>}
//               </div>
//               {error && <div className="text-red-500">{error}</div>}
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="gender">Gender</Label>
//                 <Select>
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
//                 <Select>
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
//           <Button className='bg-green-2 w-full'>Proceed</Button>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }

// export default RegisterationForm
