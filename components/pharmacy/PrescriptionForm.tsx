import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const PrescriptionForm = () => {
  const postDrug = () => {
    
  }
  return (
    <form>
      <h2 className="text-lg">
        Add Presciption
      </h2>
      <div className="">
        <Label>Drug</Label>
        <Input/>
      </div>
      <div className="">
        <Label>Dose</Label>
        <Input/>
      </div>
      <div className="">
        <Label>Precaution</Label>
        <Input/>
      </div>
      <div className="">
        <Label>Period of Intake</Label>
        <Input/>
      </div>
    </form>
  )
}

export default PrescriptionForm
