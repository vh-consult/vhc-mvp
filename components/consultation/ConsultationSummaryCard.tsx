'use client';
import { useEffect, useState } from 'react';
import { fetchConsultationSession } from '@/lib/actions/consultation.actions'
import { TPatient } from '../doctor/DoctorDashboard';
import { MedicationParams } from '@/lib/database/models/medication.model';

export type TDoctor = {
    firstName: string;
    lastName: string;
}

export type TConsultation = {
    doctor: TDoctor;
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
    <div className='w-[500px] p-3 bg-gray-200 mt-20 ml-20 rounded-lg'>
      <h1 className="text-3xl font-medium">Consultation Summary</h1>
      {
        summary ? (
            <table className="">
                <tbody className="">
                    <tr className=''>
                        <td>Doctor</td>
                        <td>{summary?.doctor.firstName + ' ' + summary?.doctor.lastName}</td>
                    </tr>
                    <tr>
                        <td>Patient</td>
                        <td>{summary?.patient.firstName + ' ' + summary?.patient.lastName}</td>
                    </tr>
                    <tr>
                        <td>Date</td>
                        <td>{new Date(summary?.date).toLocaleString()}</td>
                    </tr>
                    <tr className=''>
                        <td>Problem</td>
                        <td>{summary?.problemStatement}</td>
                    </tr>
                    <tr>
                        <td>Examination</td>
                        <td>{summary?.examination}</td>
                    </tr>
                    <tr>
                        <td>Prescriptions</td>
                        <td>
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
                        </td>
                    </tr>
                </tbody>
            </table>
        ): ''
      }
    </div>
  )
}

export default ConsultationSummaryCard
