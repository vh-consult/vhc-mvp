import React from 'react'
import { Input } from '../ui/input';
import { Company } from '@/lib/database/models/company.model';
import { revalidatePath } from 'next/cache';
import SubmitButton from '../SubmitButton';

const RegisterCompany = () => {
  const createCompany = async (formData: FormData) => {
    "use server"
    
    await Company.create({
        name: formData.get("name") as string,
        location: formData.get("location") as string,
        image: formData.get("image") as File,
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
      <SubmitButton
        className='bg-green-2'
        buttonText='Create Company'
      />
    </form>
  )
}

export default RegisterCompany
