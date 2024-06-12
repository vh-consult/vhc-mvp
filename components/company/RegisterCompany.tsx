import React from 'react'
import { Input } from '../ui/input';
import { Company } from '@/lib/database/models/company.model';
import { revalidatePath } from 'next/cache';
import SubmitButton from '../SubmitButton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { User } from '@/lib/database/models/user.model';
import { currentUser } from '@clerk/nextjs/server';

const RegisterCompany = async () => {
  const createCompany = async (formData: FormData) => {
    "use server"
    const user = await currentUser();
    if (!user) {
      throw new Error('User not logged in')
    }
    await Company.create({
        name: formData.get("name") as string,
        location: formData.get("location") as string,
        image: formData.get("image") as File,
        type: formData.get("type") as "pharmacy" | "hospital"
    })
    

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
