import React from 'react'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import SubmitButton from '../SubmitButton'
import { revalidatePath } from 'next/cache'
import Order from '@/lib/database/models/order.model'

const ShippingForm = async () => {
    const postForm = async (formData: FormData) => {
        "use server"
        const address = await Order.create({
            name: formData.get("contact") as string,
            location: formData.get("location") as string,
            image: formData.get("image") as File,
            type: "hospital"
        })
        revalidatePath("/")
}
  return (
    <form
      action={postForm}
      className='h-[200px] w-full bg-dark-1 
      flex flex-col flex-center gap-2 rounded-lg py-1'
    >
      <Input
        type='text'
        placeholder='Active phone number'
        name='contact'
        className='w-[90%] bg-dark-3 border-none'
      />
      <Input
        type='text'
        placeholder='Home address'
        name='homeAddress'
        className='w-[90%] bg-dark-3 border-none'

      />
      {  
        <Select name="pickup">
        <SelectTrigger className='w-[90%] border border-dark-4 text-sky-1' id="companyType">
          <SelectValue  placeholder="Preferred delivery choice" />
        </SelectTrigger>
        <SelectContent position="popper" className='bg-dark-3  text-sky-2'>
          <SelectItem  value="homeDelivery">Home Delivery</SelectItem>
          <SelectItem value="inPerson ">In person </SelectItem>
        </SelectContent>
      </Select>
      }
      <SubmitButton
        className='bg-blue-1 w-[90%]'
        buttonText='Save'
      />
    </form>
  )
}

export default ShippingForm
