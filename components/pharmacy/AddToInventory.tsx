import React from 'react'
import { Input } from '../ui/input';
import { revalidatePath } from 'next/cache';
import Drug from '@/lib/database/models/drug.model';
import SubmitButton from '../general/SubmitButton';

const AddToInventory = () => {
  const postDrug = async (formData: FormData) => {

  }
  return (
    <form
      action={postDrug}
    >
      <Input
        type='text'
        placeholder='Add name'
        name='name'
      />
      <Input
        type='number'
        placeholder='Add location'
        name='location'
        min={1}
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

export default AddToInventory
