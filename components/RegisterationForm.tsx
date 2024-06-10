import React, { ReactNode, useState } from 'react'
import MeetingModal from './consultation/MeetingModal'
import { Input } from './ui/input'
import ReactDatePicker from 'react-datepicker';

const initialValues = {
    dateOfBirth: new Date(),
    role: '',
    location: '',
  };

const RegisterationForm = () => {
    const [formState, setFormState] = useState<boolean>(false)
    const [values, setValues] = useState(initialValues);

  return (
    <div className=''>
      <MeetingModal 
        isOpen={formState} 
        onClose={()=>{setFormState(false)}} 
        title={'Registration Form'}
      >
        <div className="flex flex-col gap-2.5">
            <Label className="text-base font-normal leading-[22.4px] text-green-1">
              
            </Label>
            <Input
            type='text'
              className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) =>
                setValues({ ...values, role: e.target.value })
              }
            />
        </div>
        <div className="flex w-full flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-green-1">
              Date of Birth
            </label>
            <ReactDatePicker
              selected={values.dateOfBirth}
              onChange={(date) => setValues({ ...values, dateOfBirth: date! })}
              showTimeSelect
              dateFormat="MMMM d, yyyy"
              className="w-full rounded bg-dark-3 p-2 focus:outline-none"
            />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="role">What are you?</Label>
          <Select>
            <SelectTrigger id="role">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="patient">Patient</SelectItem>
              <SelectItem value="doctor">doctor</SelectItem>
              <SelectItem value="hospitalAdmin">Hospital Admin</SelectItem>
              <SelectItem value="pharmacyAdmin">Pharmacy Admin</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </MeetingModal>
    </div>
  )
}

export default RegisterationForm

// import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

