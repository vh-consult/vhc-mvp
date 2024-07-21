"use client"
import React, {FormEvent, useState} from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { toast } from '../ui/use-toast'

interface DrugPrescriptionParams {
  medicine: string;
  dose: number | null;
  caution: string;
  duration: number | null;
}
const initialValues = {
  medicine: '',
  dose: null,
  caution: '',
  duration: null
}
const PrescriptionForm = () => {
  const [values, setValues] = useState<DrugPrescriptionParams>(initialValues)
  const [drugsAdded, setDrugsAdded] = useState<DrugPrescriptionParams[]>([])
  const handleNew = async () => {
    
  }
  const handlePush = async (e: FormEvent, values: DrugPrescriptionParams) => {
    e.preventDefault()
    drugsAdded.push(values)
    toast({title: "Drug appended"})
    setValues(initialValues)
  }
  return (
    <div className="w-[350px] h-[300px] bg-dark-1 p-3">
      <h2 className="text-lg">
        Add Presciption
      </h2>
      <div className="my-4">
        <h1 className="text-sm">Drugs Prescribed</h1>
        <div className="flex flex-between text-xs font-light opacity-40">
          {
            drugsAdded?.length === 0 ? '' : (
              <>
                <span className="">Medicine</span>
                <span className="">Caution</span>
                <span className="">Duration</span>
                <span className="">Dose</span>
              </>
            )
          } 
        </div>
        <div className="flex flex-col gap-2 text-sm">
          {
            drugsAdded?.length === 0 ? 'No drugs yet': drugsAdded?.map((drug, index) => (
              <div key={index} className=' flex flex-between bg-dark-3 text-sm'>
                <span className="max-w-[40%]">{drug.medicine}</span>
                <span className="max-w-[30%]">{drug.caution}</span>
                <span className="w-[15%]">{drug.duration}</span>
                <span className="w-[15%]">{drug.dose}</span>
              </div>
            ))
          }
        </div>
      </div>
      <form className='flex flex-col gap-3'>
        <div className="w-full flex gap-1">
          <span className="w-[75%]">
            <Label>Medicine</Label>
            <Input
              onChange={(e)=> setValues({...values, medicine:e.target.value})}
              type='string'
              className='bg-dark-3 focus-visible:ring-0 border-none'
              title='Enter name of medicine'
            />
          </span>
          <span className="w-[25%]">
            <Label>Dose</Label>
            <Input
              onChange={(e)=> setValues({...values, dose:e.target.value as any})}
              type='number'
              min={1}
              className='bg-dark-3 focus-visible:ring-0 border-none'
              title='Enter quantity to take each time'
            />
          </span>
        </div>
        <div className="w-full flex gap-1">
          <span className="w-[75%]">
            <Label>Caution</Label>
            <Input
              onChange={(e)=> setValues({...values, caution:e.target.value})}
              type='string'
              className='bg-dark-3 focus-visible:ring-0 border-none'
              title='Enter cautions. eg: 30 minutes before meal, etc'
            />
          </span>
          <span className="w-[25%]">
            <Label>Duration</Label>
            <Input
              onChange={(e)=> setValues({...values, duration:e.target.value as any})}
              type='number'
              min={0}
              className='bg-dark-3 focus-visible:ring-0 border-none'
              title='Enter number of days to take drug'
            />
          </span>
        </div>
        <Button
          className='w-full border-2 border-dashed border-green-1 hover:bg-green-1 hover:text-green-4'
          onClick={(e) => handlePush(e, values)}
        >
          Push drug
        </Button>
        <Button
          className='w-full bg-blue-1'
          onClick={handleNew}
        >
          Done
        </Button>
      </form>

    </div>
  )
}

export default PrescriptionForm
