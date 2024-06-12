import React from 'react'
import { Input } from '../ui/input';
import { Company, Hospital, Pharmacy } from '@/lib/database/models/company.model';
import { revalidatePath } from 'next/cache';
import SubmitButton from '../SubmitButton';
import { 
  Select, SelectContent, 
  SelectItem, SelectTrigger, SelectValue 
} from '../ui/select';
import { currentUser } from '@clerk/nextjs/server';
import { getUserById } from '@/lib/actions/user.actions';

const RegisterCompany = async () => {
  const createCompany = async (formData: FormData) => {
    "use server"
    const user = await currentUser();
    if (!user) {
      throw new Error('User not logged in')
      }
    const userFromDB:UserParams = await getUserById(user?.id as string)
    if (userFromDB.role === "hospitalAdmin") {
      await Hospital.create({
          name: formData.get("name") as string,
          location: formData.get("location") as string,
          image: formData.get("image") as File,
          type: "hospital"
      })
    } else if (userFromDB.role === "pharmacyAdmin") {
      await Pharmacy.create({
        name: formData.get("name") as string,
        location: formData.get("location") as string,
        image: formData.get("image") as File,
        type: "pharmacy"
      })
    } else {
      const typeOfCompany = formData.get("type") as "pharmacy" | "hospital"
      await Company.create({
        name: formData.get("name") as string,
        location: formData.get("location") as string,
        image: formData.get("image") as File,
        type: typeOfCompany
      })
    }
    

    revalidatePath("/")
  }
  return (
    <form
      action={createCompany}
    >
      <Input
        type='text'
        placeholder='Add name'
        name='name'
      />
      <Input
        type='text'
        placeholder='Add location'
        name='location'
      />
      <Input
        type='file'
        placeholder='Add image'
        name='image'
      />
      {  
        <Select name="type">
        <SelectTrigger id="companyType">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent position="popper" className='bg-dark-3  text-sky-2'>
          <SelectItem  value="pharmacy">Pharmacy</SelectItem>
          <SelectItem value="hospital">Hospital</SelectItem>
        </SelectContent>
      </Select>
      }
      <SubmitButton
        className='bg-green-2'
        buttonText='Create Company'
      />
    </form>
  )
}

export default RegisterCompany
