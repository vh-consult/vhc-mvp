"use client"
import React, {FormEvent, useState} from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { toast } from '../ui/use-toast'
import Loader from '../general/Loader'
import { Dialog, DialogContent } from '../ui/dialog'
import { GoIssueOpened } from 'react-icons/go'
import DrugPrescribed from './DrugPrescribed'
import { postMeds } from '@/lib/actions/medication.actions'
import Cookies from "js-cookie"

export interface DrugPrescriptionParams {
  drug: string;
  dose: number | null;
  caution: string;
  duration: number | null;
}
const initialValues = {
  drug: '',
  dose: null,
  caution: '',
  duration: null
}
const PrescriptionForm = (
  {isOpen, onClose, setPrescribedDrugs, consultationId}:
  {isOpen:boolean, onClose: ()=>void, setPrescribedDrugs:any, consultationId: string}
) => {
  const [values, setValues] = useState<DrugPrescriptionParams>(initialValues)
  const [loading, setLoading] = useState<boolean>(false)
  const [drugsAdded, setDrugsAdded] = useState<DrugPrescriptionParams[]>([])
  const user = JSON.parse(Cookies.get("user") || '{}');
  const handleDone = async (e: FormEvent) => {
    e.preventDefault()
    setPrescribedDrugs(drugsAdded)
    const uploadedMeda = await postMeds(user?.id as string, consultationId, drugsAdded)
    isOpen = false
    toast({title: "drugs added"})  
  }
  const handlePush = async (e: FormEvent, values: DrugPrescriptionParams) => {
    e.preventDefault()
    const {caution, dose, duration, drug} = values
    if(caution === '' || dose === null || duration === null || drug === '') {
      throw new Error(
        `${
          toast({title: "Fill all form fields with valid data"}) 
        }`
      )
    }

    drugsAdded.push(values)
    toast({title: "Drug appended"})
    setValues(initialValues)
  }
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[550px] min-h-[350px] bg-white p-3">
        <h2 className="text-lg">
          Add Presciption
        </h2>
        <DrugPrescribed drugs={drugsAdded} />
        <form className='flex flex-col gap-3'>
          <div className="w-full flex gap-1">
            <span className="w-[75%]">
              <Label>drug</Label>
              <Input
                onChange={(e)=> setValues({...values, drug:e.target.value})}
                type='string'
                className='bg-secondary focus-visible:ring-0 border-gray-400'
                title='Enter name of drug'
              />
            </span>
            <span className="w-[25%]">
              <Label>Dose</Label>
              <Input
                onChange={(e)=> setValues({...values, dose:e.target.value as any})}
                type='number'
                min={1}
                className='bg-secondary focus-visible:ring-0 border-gray-400'
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
                className='bg-secondary focus-visible:ring-0 border-gray-400'
                title='Enter cautions. eg: 30 minutes before meal, etc'
              />
            </span>
            <span className="w-[25%]">
              <Label>Duration</Label>
              <Input
                onChange={(e)=> setValues({...values, duration:e.target.value as any})}
                type='number'
                min={0}
                className='bg-secondary focus-visible:ring-0 border-gray-400'
                title='Enter number of days to take drug'
              />
            </span>
          </div>
          <Button
            className='w-full border-2 border-dashed bg-blue-50 text-dark'
            onClick={(e) => handlePush(e, values)}
          >
            Add To Prescription
          </Button>
            <Button
              className='w-full bg-blue-1 text-white'
              onClick={(e)=>handleDone(e)}
              >
              {
                loading? <Loader/> : (
              "Done"
            )
          }
            </Button>

        </form>
      </DialogContent>
    </Dialog>
  )
}

export default PrescriptionForm
