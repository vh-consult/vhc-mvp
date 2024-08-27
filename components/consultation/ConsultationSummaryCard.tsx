import { fetchConsultationSession } from '@/lib/actions/consultation.actions'
import React from 'react'
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
    medication: MedicationParams;
    channel: string;
    examination: string;
    diagnosis: string
}

const ConsultationSummaryCard = async ({id}: {id: string}) => {
  const consultation = await fetchConsultationSession(id)
  return (
    <div className='w-[500px] p-3 bg-gray-200 mt-20 ml-20 rounded-lg'>
      <h1 className="text-3xl font-medium">Consultation Summary</h1>
      <table className="">
        <tbody className="">
            <tr className=''>
                <td>Doctor</td>
                <td>{consultation.doctor.firstName + ' ' + consultation.doctor.lastName}</td>
            </tr>
            <tr>
                <td>Patient</td>
                <td>{consultation.patient.firstName + ' ' + consultation.patient.lastName}</td>
            </tr>
            <tr>
                <td>Date</td>
                <td>{new Date(consultation.date).toLocaleString()}</td>
            </tr>
            <tr className=''>
                <td>Problem</td>
                <td>{consultation.problemStatement}</td>
            </tr>
            <tr>
                <td>Examination</td>
                <td>{consultation.examination}</td>
            </tr>
            <tr>
                <td>Prescriptions</td>
                <td>
                    {
                        consultation.medication.map(
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
    </div>
  )
}

export default ConsultationSummaryCard
