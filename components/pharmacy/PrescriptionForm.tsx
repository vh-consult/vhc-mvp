"use client"
import React, {FormEvent, useState} from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { toast } from '../ui/use-toast'
import Loader from '../general/Loader'
import { Dialog, DialogContent } from '../ui/dialog'
import { GoIssueOpened } from 'react-icons/go'

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
const PrescriptionForm = ({isOpen, onClose, setPrescribedDrugs}:{isOpen:boolean, onClose: ()=>void, setPrescribedDrugs:any}) => {
  const [values, setValues] = useState<DrugPrescriptionParams>(initialValues)
  const [loading, setLoading] = useState<boolean>(false)
  const [drugsAdded, setDrugsAdded] = useState<DrugPrescriptionParams[]>([])

  const handleDone = async () => {
    setPrescribedDrugs(drugsAdded)
    isOpen = false
    toast({title: "drugs added"})  
  }
  const handlePush = async (e: FormEvent, values: DrugPrescriptionParams) => {
    e.preventDefault()
    const {caution, dose, duration, medicine} = values
    if(caution === '' || dose === null || duration === null || medicine === '') {
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
        <div className="my-4 bg-gray-100 p-2">
          <h1 className="text-sm">Drugs Prescribed</h1>
          <div className="flex flex-between text-xs font-light opacity-80">
            {
              drugsAdded?.length === 0 ? '' : (
                <div className='grid grid-cols-4 gap-x-10'>
                  <span className="">Medicine</span>
                  <span className="">Caution</span>
                  <span className="">Duration</span>
                  <span className="">Dose</span>
                </div>
              )
            } 
          </div>
          <div className="flex flex-col gap-2 text-sm">
            {
              drugsAdded?.length === 0 ? 'No drugs added yet': drugsAdded?.map((drug, index) => (
                <div key={index} className='grid grid-cols-4 gap-x-8 bg-green-3 text-sm'>
                  <span className="">{drug.medicine}</span>
                  <span className="">{drug.caution}</span>
                  <span className="">{drug.duration}</span>
                  <span className="">{drug.dose}</span>
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
                className='bg-green-3 focus-visible:ring-0 border-gray-400'
                title='Enter name of medicine'
              />
            </span>
            <span className="w-[25%]">
              <Label>Dose</Label>
              <Input
                onChange={(e)=> setValues({...values, dose:e.target.value as any})}
                type='number'
                min={1}
                className='bg-green-3 focus-visible:ring-0 border-gray-400'
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
                className='bg-green-3 focus-visible:ring-0 border-gray-400'
                title='Enter cautions. eg: 30 minutes before meal, etc'
              />
            </span>
            <span className="w-[25%]">
              <Label>Duration</Label>
              <Input
                onChange={(e)=> setValues({...values, duration:e.target.value as any})}
                type='number'
                min={0}
                className='bg-green-3 focus-visible:ring-0 border-gray-400'
                title='Enter number of days to take drug'
              />
            </span>
          </div>
          <Button
            className='w-full border-2 border-dashed bg-blue-50 text-green-4'
            onClick={(e) => handlePush(e, values)}
          >
            Add To Prescription
          </Button>
            <Button
              className='w-full bg-blue-1 text-white'
              onClick={handleDone}
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
