"use client"
import React, { FormEvent, useState } from 'react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import Loader from '../general/Loader'
import PrescriptionForm from '../pharmacy/PrescriptionForm'
import { BiPlus } from 'react-icons/bi'
import { postConsultationForm } from '@/lib/actions/consultation.actions'
import DrugPrescribed from '../pharmacy/DrugPrescribed'
import { toast } from '../ui/use-toast'
import Cookies from "js-cookie"

const ConsultationForm = ({consultationId}: {consultationId:string}) => {
  const initialValues = {
    complaint: '',
    diagnosis: '',
    examination: '',
  };
  const [values, setValues] = useState(initialValues);
  const [prescribedDrugs, setPrescribedDrugs] = useState([])
  const [loading, setLoading] = useState<boolean>(false)
  const [showPrescriptionForm, setShowPrescriptionForm] = useState<boolean>(false)
  const user = JSON.parse(Cookies.get("user") || '{}');

  const addConsultationPost = async (e:FormEvent) => {
    e.preventDefault()
      try{
        setLoading(true)
        const message = await postConsultationForm(values,  consultationId)
        toast({title: message?.message })
      }catch(error){
        console.log(error)
      }finally{
        setLoading(false)
      }
  }
  return(
    <>
      {
        showPrescriptionForm === true ? (
          <PrescriptionForm 
            consultationId={consultationId}
            isOpen={showPrescriptionForm} 
            onClose={()=>setShowPrescriptionForm(false)}
            setPrescribedDrugs={setPrescribedDrugs}
          />
        ) : (
          <DrugPrescribed drugs={prescribedDrugs} />
        )
      }
  <div className="w-[325px] bg-white p-3 text-dark rounded-lg shadow-sm border-none">
    <h2 className="font-medium text-lg mb-3">Consultation Form</h2>
    <Textarea 
        placeholder={`Enter complaint here`}
        className="my-2 w-full bg-secondary h-[80px] "
        onChange={(e) => setValues({ ...values, complaint: e.target.value })}
    />
    <Textarea 
        placeholder={`Enter examination here`}
        className="my-2 w-full bg-secondary h-[80px]"
        onChange={(e) => setValues({ ...values, examination: e.target.value })}
    />
    <Textarea 
        placeholder={`Enter diagnosis here`}
        className="my-2 w-full bg-secondary h-[80px]"
        onChange={(e) => setValues({ ...values, diagnosis: e.target.value })}
    />
    <Button onClick={()=>setShowPrescriptionForm(true)}>Add Prescription <BiPlus/> </Button>
    <Button className='w-full mt-3 rounded-md 
    capitalize hover:shadow-md bg-accent text-secondary 
    font-medium text-sm ' onClick={(e) => addConsultationPost(e)}>
        {loading? <Loader/> : `Upload form`}
    </Button>
  </div>
      </>
  )
}

export default ConsultationForm
