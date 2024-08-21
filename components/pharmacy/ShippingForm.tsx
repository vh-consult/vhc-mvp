import React from 'react'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { revalidatePath } from 'next/cache'
import Order from '@/lib/database/models/order.model'
import SubmitButton from '../general/SubmitButton'

const ShippingForm = async () => {
    const postForm = async (formData: FormData) => {
      "use server"
}
  return (
    <form
      action={postForm}
      className='h-[200px] w-full bg-white
      flex flex-col flex-center gap-2 rounded-lg py-1'
    >
      <Input
        type='text'
        placeholder='Active phone number'
        name='contact'
        className='w-[90%] bg-green-3 '
      />
      <Input
        type='text'
        placeholder='Home address'
        name='homeAddress'
        className='w-[90%] bg-green-3 border-none'

      />
      {  
        <Select name="pickup">
        <SelectTrigger className='w-[90%] bg-green-3 border text-green-4' id="companyType">
          <SelectValue  placeholder="Preferred delivery choice" />
        </SelectTrigger>
        <SelectContent position="popper" className='bg-green-1  text-green-4'>
          <SelectItem  value="homeDelivery">Home Delivery</SelectItem>
          <SelectItem value="inPerson ">In person </SelectItem>
        </SelectContent>
      </Select>
      }
      <SubmitButton
        className='bg-blue-1 text-white w-[90%]'
        buttonText='Save'
      />
    </form>
  )
}

export default ShippingForm
