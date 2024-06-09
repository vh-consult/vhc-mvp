import React, { FormEvent, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const PrescriptionForm = () => {
  const [complaint, setComplaint] = useState()
  const [examination, setExamination] = useState()
  const [diagnosis, setDiagnosis] = useState()
  const [prescription, setPrescription] = useState()

  const fields = [
      {
          label: 'Complaint',
          value: complaint
      },
      {
          label: 'Examination',
          value: examination
      },
      {
          label: 'Diagnosis',
          value: diagnosis
      },
      {
          label: 'Prescription',
          value: prescription
      }
  ]

  const handleClick = async(e:FormEvent|any) => {
      e.preventDefault()
  }
  return(
  <div className="w-[400px] bg-white p-3 rounded-lg shadow-sm border">
    <h2 className="font-medium mb-3">Consultation Form</h2>
    {
      fields.map((field, index)=>{
        return(
          <div className="" key={index}>
            <Input 
                type="text"
                value={field.value}
                className="my-2 w-full bg-whitish-violet h-[80px] border"
                
            />
          </div>
        )
      })
    }
    <Button className='w-full mt-3 rounded-md 
    capitalize hover:shadow-md bg-saturated-purple text-whitish-violet 
    font-medium text-sm ' onClick={handleClick}>
        Upload form
    </Button>
  </div>
  )
}

export default PrescriptionForm
