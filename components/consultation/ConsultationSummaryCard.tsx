'use client';
import { useEffect, useState } from 'react';
import { fetchConsultationSession } from '@/lib/actions/consultation.actions'
import { TPatient } from '../doctor/DoctorDashboard';
import { MedicationParams } from '@/lib/database/models/medication.model';

export type spanoctor = {
    firstName: string;
    lastName: string;
}

export type TConsultation = {
    doctor: spanoctor;
    patient: TPatient;
    date: Date;
    medication: any[];
    channel: string;
    examination: string;
    diagnosis: string;
    problemStatement: string

}

const ConsultationSummaryCard = ({consultationId}: {consultationId:string}) => {
    const [summary, setSummary] = useState<TConsultation>()
    
    useEffect(()=> {
    const fetch = async () => {
      const consultation = await fetchConsultationSession(consultationId)
      setSummary(consultation)
    }
    fetch()
  },[consultationId])
    return (
    <div className='w-full p-3 bg-white shadow rounded-lg'>
      <h1 className="text-xl font-medium">Consultation Summary</h1>
      {
        summary ? (
            <div className="w-full flex flex-col gap-6">
                    <div className='flex flex-col'>
                        <h3 className='text-sm font-medium w-full p-1    flex items-center opacity-65 bg-gray-100'>Doctor</h3>
                        <p className=''>{summary?.doctor.firstName + ' ' + summary?.doctor.lastName}</p>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-sm font-medium w-full p-1    flex items-center opacity-65 bg-gray-100'>Patient</h3>
                        <p className=''>{summary?.patient.firstName + ' ' + summary?.patient.lastName}</p>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-sm font-medium w-full p-1    flex items-center opacity-65 bg-gray-100'>Date</h3>
                        <p className=''>{new Date(summary?.date).toLocaleString()}</p>
                    </div>
                    <div className=''>
                        <h3 className='text-sm font-medium w-full p-1    flex items-center opacity-65 bg-gray-100'>Problem</h3>
                        <p className=''>{summary?.problemStatement}</p>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-sm font-medium w-full p-1    flex items-center opacity-65 bg-gray-100'>Examination</h3>
                        <p className=''>{summary?.examination}</p>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-sm font-medium w-full p-1    flex items-center opacity-65 bg-gray-100'>Prescriptions</h3>
                        <span>
                            {
                                summary?.medication.map(
                                    (med:any, index:number) => (
                                        <div className="" key={index}>
                                            <span className="">{med.drug}</span>
                                            <span className="">{med.dose}</span>
                                            <span className="">{med.status}</span>
                                            <span className="">{med.duration}</span>
                                        </div>
                                    )
                                )}
                        </span>
                    </div>
            </div>
        ): 'No comment added'
      }
    </div>
  )
}

export default ConsultationSummaryCard
