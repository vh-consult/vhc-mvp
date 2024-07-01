"use client"
import React, { FormEvent, useState } from 'react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import Loader from '../general/Loader'
import { postConsultationForm } from '@/lib/actions/appointment.actions'
import { useUser } from '@clerk/nextjs'

const ConsultationForm = () => {
  const initialValues = {
    complaint: '',
    diagnosis: '',
    examination: '',
    prescription: '',
  };
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState<boolean>(false)
  const {user} = useUser()

  const addConsultationPost = async () => {
      try{
        setLoading(true)
        //not the correct implementation. I need to pass in the client's id somehow
        const message = await postConsultationForm(user?.id as string, values, user?.id!)
      }finally{
        setLoading(false)
      }
  }
  return(
  <form className="w-[325px] bg-dark-1 p-3 rounded-lg shadow-sm border-none">
    <h2 className="font-medium text-lg mb-3">Consultation Form</h2>
    <Textarea 
        placeholder={`Enter complaint here`}
        className="my-2 w-full bg-dark-3 h-[80px] border-none"
        onChange={(e) => setValues({ ...values, complaint: e.target.value })}
    />
    <Textarea 
        placeholder={`Enter examination here`}
        className="my-2 w-full bg-dark-3 h-[80px] border-none"
        onChange={(e) => setValues({ ...values, examination: e.target.value })}
    />
    <Textarea 
        placeholder={`Enter diagnosis here`}
        className="my-2 w-full bg-dark-3 h-[80px] border-none"
        onChange={(e) => setValues({ ...values, diagnosis: e.target.value })}
    />
    <Textarea 
        placeholder={`Enter prescription here`}
        className="my-2 w-full bg-dark-3 h-[80px] border-none"
        onChange={(e) => setValues({ ...values, prescription: e.target.value })}
    />
    <Button className='w-full mt-3 rounded-md 
    capitalize hover:shadow-md bg-green-2 text-whitish-violet 
    font-medium text-sm ' onClick={addConsultationPost}>
        {loading? <Loader/> : `Upload form`}
    </Button>
  </form>
  )
}

export default ConsultationForm
