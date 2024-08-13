"use client"
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import FormModal from '../consultation/FormModal';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { addToInventory } from '@/lib/actions/inventory.actions';
import { useUser } from '@clerk/nextjs';
import { toast } from '../ui/use-toast'; 
import { useEdgeStore } from '@/lib/edgestore';
import Loader from '../general/Loader';
import { SingleImageDropzone } from '../general/SingleImageDropzone';
import ReactDatePicker from 'react-datepicker';

const initialValues = {
  name: '',
  description: '',
  price: 0,
  quantity: 0,
  catalog: '',
  image: '',
  expiryDate: new Date()
};


const AddToInventory = ({show, onClose}: {show:boolean, onClose:()=>void}) => {
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState<boolean>(false)
  const {user} = useUser()
  const {edgestore} = useEdgeStore()
  const [file, setFile] = useState<File>()
  
  const postDrug = async () => {
    setLoading(true)
    if (file) {
      const res = await edgestore.myPublicImages.upload({file})
      values.image = res.url
    }
    await addToInventory(user?.id as string, values )
    setLoading(false)
    toast({title: 'Drug uploaded successfully'})
    
  }
  return (
    <FormModal
    isOpen={show}
    onClose={onClose}
    title="Medicine Inventory Form"
    handleClick={postDrug}
    buttonText='Upload To Inventory'
    >
      {
        loading? (<Loader/>) : (
          <>
            <SingleImageDropzone
              width={125}
              height={150}
              value={file}
              onChange={(file) => {
                setFile(file);
              }}
              className='mx-auto'
            />
            <Input
              className=" bg-green-3 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) =>
                setValues({ ...values, name: e.target.value })
              }
              placeholder="Drug's name"
            />
            <Select required onValueChange={(value) => setValues({ ...values, catalog: value })}>
              <SelectTrigger id="catalog" className='bg-green-3 text-sm'>
                <SelectValue placeholder="Select catalog" />
              </SelectTrigger>
              <SelectContent position="popper" className='bg-green-3 text-green-4'>
                <SelectItem value="painkiller">Painkiller</SelectItem>
                <SelectItem value="appetizer">Appetizer</SelectItem>
                <SelectItem value="antiMalaria">Anti-malaria</SelectItem>
                <SelectItem value="energizer">Energizer</SelectItem>
              </SelectContent>
            </Select>
      <Textarea
        className=" bg-green-3 focus-visible:ring-0 focus-visible:ring-offset-0"
        onChange={(e) =>
          setValues({ ...values, description: e.target.value })
        }
        placeholder='Description'
      />
      <ReactDatePicker
            required
            // minDate={new Date()}
            placeholderText='Select expiry date'
            selected={values.expiryDate}
            onChange={(date) => setValues({ ...values, expiryDate: date! })}
            dateFormat="MMMM d, yyyy"
            className="w-full rounded bg-green-3 p-2 focus:outline-none"
      />
    <div className="flex w-full gap-2">
        <Input 
          type='number'
          min={0}
          placeholder='Price' 
          onChange={(e)=>setValues({...values, price: e.target.value as any | number })}
          className=" w-1/2 bg-green-3 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Input 
          type='number'
          min={1}
          placeholder='Quantity' 
          onChange={(e)=>setValues({...values, quantity: e.target.value as any | number })}
          className=" w-1/2 bg-green-3 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
    </div>
      </>
        )
      }
    
    </FormModal>
  )
}

export default AddToInventory
