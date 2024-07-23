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

const initialValues = {
  name: '',
  description: '',
  price: 0,
  quantity: 0,
  catalog: '',
  image: ''
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
    <>
      {
        loading? (<Loader/>) : (
          
          <FormModal
            isOpen={show}
            onClose={onClose}
            title="Medicine Inventory Form"
            handleClick={postDrug}
            buttonText='Upload To Inventory'
          >
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
                <SelectItem value="painkiller">Painkiller</SelectItem>
                <SelectItem value="appetizer">Appetizer</SelectItem>
                <SelectItem value="antiMalaria">Anti-malaria</SelectItem>
                <SelectItem value="energizer">Energizer</SelectItem>
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
    </>
  )
}

export default AddToInventory
