"use client"
import React, { FormEvent, useState } from 'react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import Loader from '../general/Loader'
import { useUser } from '@clerk/nextjs'
import PrescriptionForm from '../pharmacy/PrescriptionForm'
import { BiPlus } from 'react-icons/bi'
import { postConsultationForm } from '@/lib/actions/consultation.actions'
import DrugPrescribed from '../pharmacy/DrugPrescribed'

const ConsultationForm = ({consultation}: {consultation:string}) => {
  const initialValues = {
    complaint: '',
    diagnosis: '',
    examination: '',
    prescription: [],
  };
  const [values, setValues] = useState(initialValues);
  const [prescribedDrugs, setPrescribedDrugs] = useState(initialValues.prescription)
  const [loading, setLoading] = useState<boolean>(false)
  const [showPrescriptionForm, setShowPrescriptionForm] = useState<boolean>(false)
  const {user} = useUser()

  const addConsultationPost = async () => {
      try{
        setLoading(true)
        const message = await postConsultationForm(values,  consultation)
      }finally{
        setLoading(false)
      }
  }
  return(
    <>
  <div className="w-[325px] bg-white p-3 text-green-4 rounded-lg shadow-sm border-none">
    <h2 className="font-medium text-lg mb-3">Consultation Form</h2>
    <Textarea 
        placeholder={`Enter complaint here`}
        className="my-2 w-full bg-green-1 h-[80px] "
        onChange={(e) => setValues({ ...values, complaint: e.target.value })}
    />
    <Textarea 
        placeholder={`Enter examination here`}
        className="my-2 w-full bg-green-1 h-[80px]"
        onChange={(e) => setValues({ ...values, examination: e.target.value })}
    />
    <Textarea 
        placeholder={`Enter diagnosis here`}
        className="my-2 w-full bg-green-1 h-[80px]"
        onChange={(e) => setValues({ ...values, diagnosis: e.target.value })}
    />
    <Button onClick={()=>setShowPrescriptionForm(true)}>Add Prescription <BiPlus/> </Button>
    <Button className='w-full mt-3 rounded-md 
    capitalize hover:shadow-md bg-green-2 text-green-1 
    font-medium text-sm ' onClick={addConsultationPost}>
        {loading? <Loader/> : `Upload form`}
    </Button>
  </div>
      {
        showPrescriptionForm === true ? (
          <PrescriptionForm 
            isOpen={showPrescriptionForm} 
            onClose={()=>setShowPrescriptionForm(false)}
            setPrescribedDrugs={setPrescribedDrugs}
          />
        ) : (
          <DrugPrescribed drugs={prescribedDrugs} />
        )
      }
      </>
  )
}

export default ConsultationForm
