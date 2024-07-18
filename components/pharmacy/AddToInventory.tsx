"use client"
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import FormModal from '../consultation/FormModal';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { CldUploadWidget } from 'next-cloudinary';
import { Button } from '../ui/button';
import { addToInventory } from '@/lib/actions/inventory.actions';
import { useUser } from '@clerk/nextjs';
import { toast } from '../ui/use-toast'; 
import { useEdgeStore } from '@/lib/edgestore';

const initialValues = {
  name: '',
  description: '',
  price: 0,
  quantity: 0,
  catalog: '',
  image: ''
};


const AddToInventory = () => {
  const [values, setValues] = useState(initialValues);
  const [show, setShow] = useState(true);
  const {user} = useUser()
  const {edgestore} = useEdgeStore()
  const [file, setFile] = useState<File>()
  
  const postDrug = async () => {
    if (file) {
      const res = await edgestore.myPublicImages.upload({file})
      values.image = res.url
    }
    await addToInventory(user?.id as string, '', values )
    toast({title: 'Drug uploaded successfully'})
  }
  return (
      <FormModal
        isOpen={show}
        onClose={() => setShow(false)}
        title="Medicine Inventory Form"
        handleClick={postDrug}
      >
        <Input 
          type='file' 
          accept='image/*' 
          placeholder='Upload image of drug'
          name='image' 
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <Input
          className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
          onChange={(e) =>
            setValues({ ...values, name: e.target.value })
          }
          placeholder="Drug's name"
        />

        <Select required onValueChange={(value) => setValues({ ...values, catalog: value })}>
          <SelectTrigger id="catalog">
            <SelectValue placeholder="Select catalog" />
          </SelectTrigger>
          <SelectContent position="popper" className='bg-dark-3 text-green-1'>
            <SelectItem value="inPersonGeneral">Painkiller</SelectItem>
            <SelectItem value="virtual">Appetizer</SelectItem>
            <SelectItem value="lab">Anti-malaria</SelectItem>
            <SelectItem value="specialBooking">Energizer</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
          onChange={(e) =>
            setValues({ ...values, description: e.target.value })
          }
          placeholder='Description'
        />
      <div className="flex w-full gap-2">
          <Input 
            type='number'
            min={0}
            placeholder='Price' 
            onChange={(e)=>setValues({...values, price: e.target.value as any | number })}
            className="border-none w-1/2 bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
          />

          <Input 
            type='number'
            min={1}
            placeholder='Quantity' 
            onChange={(e)=>setValues({...values, quantity: e.target.value as any | number })}
            className="border-none w-1/2 bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
      </div>
      
    </FormModal>
  )
}

export default AddToInventory
